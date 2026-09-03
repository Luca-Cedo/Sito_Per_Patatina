const EMAILJS_PUBLIC_KEY = 'mt6NsmzrxR9M-43WF';
const EMAILJS_SERVICE_ID = 'service_l8scudt';
const EMAILJS_TEMPLATE_ID = 'template_frqhymc';

function showStatus(message) {
    const status = document.getElementById('emailStatus');
    if (status) {
        status.textContent = message;
        status.classList.remove('hidden');
    }
}

function formatDateTime(value) {
    return new Date(value).toLocaleString('it-IT', {
        dateStyle: 'full',
        timeStyle: 'short'
    });
}

async function sendEmailDirect(percentage, restaurant, dateTime) {
    const messageParts = [`Scelta: ${percentage}%`];
    if (restaurant) messageParts.push(`Ristorante: ${restaurant}`);
    if (dateTime) messageParts.push(`Data/Ora desiderata: ${formatDateTime(dateTime)}`);

    const sendRequest = emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: 'pelatoesotico23@gmail.com',
        user_choice: `${percentage}%`,
        restaurant_selected: restaurant || 'N/A',
        choice_message: messageParts.join(' - '),
        timestamp: new Date().toLocaleString('it-IT'),
        date_time: dateTime ? formatDateTime(dateTime) : 'Non previsto'
    });

    return await Promise.race([
        sendRequest,
        new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('Timeout EmailJS')), 12000);
        })
    ]);
}

window.handleChoiceSubmit = async function handleChoiceSubmit() {
    const choiceForm = document.getElementById('choiceForm');
    const submitButton = choiceForm.querySelector('.submit-choice');
    if (!choiceForm.checkValidity()) {
        choiceForm.reportValidity();
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Invio in corso...';
    document.getElementById('sendingText').classList.remove('hidden');
    try {
        await sendEmailDirect(100, choiceForm.elements.restaurant.value, choiceForm.elements.date_time.value);
        window.location.href = 'confirm.html';
    } catch (error) {
        console.error('Errore invio email:', error);
        submitButton.disabled = false;
        submitButton.textContent = 'Riprova l\'invio';
        document.getElementById('sendingText').classList.add('hidden');
        showStatus('La mail non è partita. Controlla la configurazione EmailJS e riprova.');
    }
};

function initializeEmailFlow() {
    if (!window.emailjs) {
        showStatus('EmailJS non è stato caricato. Controlla la connessione Internet e ricarica la pagina.');
        return;
    }

    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    if (document.body.dataset.choice === '20') {
        sendEmailDirect(20, null, null).then(() => {
            window.location.href = 'confirm.html';
        }).catch(error => {
            console.error('Errore invio email:', error);
            showStatus('La mail non è partita. Controlla la configurazione EmailJS e riprova.');
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEmailFlow, { once: true });
} else {
    initializeEmailFlow();
}