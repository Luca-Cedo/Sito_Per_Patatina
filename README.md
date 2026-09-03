# 💕 Quanto Mi Ami? - Sito Web Romantico Interattivo

Un sito web divertente e romantico per chiedere "quanto mi ami" con bottoni intelligenti che scappano quando ci si avvicina, e premi straordinari! 🎉

## ✨ Caratteristiche

- 🎯 **2 bottoni percentuali** (20% e 100%)
- ☕ **Premio 20%**: 10 minuti di coccole e una crema al caffe'
- 💆 **Premio 100%**: 10 minuti di coccole, piatto offerto, ristorante e data/ora
- 📧 **Notifiche Email**: La tua ragazza riceve un'email con la scelta
- 💌 **Animazioni Romantiche**: Cuori fluttuanti, transizioni dolci, palette colorata
- 🔒 **No-Reset**: Una volta risposto, impossibile tornare indietro (se non ricaricando)
- 📱 **Responsive**: Funziona perfettamente su desktop e mobile

## 🛠️ Installazione Veloce

### 1. Scarica il Progetto

```bash
git clone <repository-url>
cd Sito_Semplice
```

### 2. Configura EmailJS

Questo sito usa **EmailJS** per inviare email automaticamente. Ecco come configurarlo:

#### A. Crea un Account EmailJS (Gratuito)
1. Vai su [emailjs.com](https://www.emailjs.com/)
2. Registrati (oppure accedi se hai già un account)
3. Vai a **Dashboard** → **Account** e copia il tuo **Public Key**

#### B. Crea un Servizio Email
1. Nel dashboard, vai a **Email Services**
2. Clicca **Add New Service**
3. Scegli il provider (Gmail, Outlook, etc.)
4. Segui le istruzioni per collegare il tuo account email
5. Copia il **Service ID** (es: `service_abc123def456`)

#### C. Crea un Template Email
1. Nel dashboard, vai a **Email Templates**
2. Clicca **Create New Template**
3. Copia questo template (o personalizzalo):

```
Subject: {{user_name}} ti ha risposto! 💕

Ciao!

{{user_name}} ha scelto: {{user_choice}}

{% if restaurant_selected != 'N/A' %}
Ristorante scelto: {{restaurant_selected}} 🍽️
{% endif %}

Messaggio completo: {{choice_message}}

Inviato il: {{timestamp}}

Divertitevi! 💕
```

4. Copia il **Template ID** (es: `template_xyz789uvw123`)

#### D. Configura il Sito
1. Apri `js/app.js`
2. Sostituisci questi valori all'inizio del file:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'; // Inserisci il tuo Public Key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE'; // Inserisci il tuo Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE'; // Inserisci il tuo Template ID
```

### 3. Avvia il Sito con F5

Apri `index.html` in VS Code e premi **F5**. Se VS Code chiede come avviare il file, scegli il browser installato. Il sito usa link HTML normali e non richiede Node.js, Python o un server locale.

EmailJS viene chiamato direttamente dal browser. Per ricevere le email devi prima inserire Public Key, Service ID e Template ID reali in `js/email.js`.

## 🚀 Deploy Online (Netlify - Consigliato)

### Opzione 1: Via GitHub + Netlify (più semplice)

1. **Crea un repo GitHub** con i tuoi file
2. **Vai su [netlify.com](https://www.netlify.com/)**
3. Clicca **"New site from Git"**
4. Connetti il tuo repo GitHub
5. Netlify auto-deploya il sito! 🎉
6. Il tuo sito sarà disponibile su un URL pubblico (es: `https://tuo-progetto.netlify.app`)

### Opzione 2: Deploy Manuale su Netlify

1. Installa Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Nella cartella del progetto:
```bash
netlify deploy --prod
```

3. Segui le istruzioni per completare il deploy

### Alternative di Hosting

| Servizio | Costo | Facilità | Link |
|----------|-------|---------|------|
| **Netlify** | Gratis | ⭐⭐⭐⭐⭐ | [netlify.com](https://netlify.com) |
| **Vercel** | Gratis | ⭐⭐⭐⭐ | [vercel.com](https://vercel.com) |
| **GitHub Pages** | Gratis | ⭐⭐⭐ | [pages.github.com](https://pages.github.com) |
| **Surge.sh** | Gratis | ⭐⭐⭐⭐ | [surge.sh](https://surge.sh) |

## 📖 Guida all'Uso

### Per te (Creator)

1. **Clicca su 20%** → Vedi il messaggio e parte la mail
2. **Clicca su 100%** → Scegli ristorante, data e ora
3. **Conferma la scelta** → Parte la mail con tutti i dettagli
4. **Visualizza il messaggio di conferma**

### Per lei (Destinataria)

1. Riceve il link (es: `https://tuo-progetto.netlify.app`)
2. Apre il sito e vede: "Quanto mi ami? 💕"
3. Legge il messaggio di ricompensa dopo aver scelto
4. Tu ricevi l'email con la sua scelta!

## 🎨 Personalizzazioni Facili

### Cambia i Colori

Modifica `css/style.css`, sezione "PALETTE COLORI ROMANTICA":

```css
--rosso-principale: #E63946;      /* Colore bottoni e accenti */
--rosa-tenero: #FFB4D9;           /* Hover states */
--crema-sfondo: #FFF8F3;          /* Background */
--oro-accento: #D4A574;           /* Accenti secondari */
```

### Cambia i Premi

Modifica `js/app.js` e personalizza i messaggi nei bottoni:

```javascript
// Per il 20%:
// Cambia il testo in: "Ti offro una pizza! 🍕"

// Per il 100%:
// Cambia il testo in: "10 minuti di massaggi + cena fuori!"
```

### Aggiungi Più Ristoranti

Modifica `index.html`, sezione "restaurant-options":

```html
<button class="restaurant-btn" data-restaurant="Nuovo Ristorante">
    <span class="emoji">🍜</span>
    <span class="name">Nuovo Ristorante</span>
</button>
```

### Cambia le Percentuali

Puoi modificare i valori nei bottoni. Cambia solo i cliccabili (20% e 100%).

## 🧪 Testing

### Test Locali (Desktop)

1. Apri `index.html` nel browser
2. Sposta il cursore verso il bottone 20%
3. Verifica che i bottoni 40%, 60%, 80% scappino
4. Clicca su 20% o 100%
5. Verifica il messaggio di bonus
6. Controlla che l'email sia stata ricevuta

### Test su Mobile

1. Apri il sito dal telefono (via link pubblico)
2. I bottoni non dovrebbero scappare (no cursor su mobile)
3. Clicca e verifica i messaggi
4. Controlla l'email ricevuta

## ⚙️ Troubleshooting

### Le Email Non Arrivano

1. Verifica che le chiavi EmailJS siano corrette in `js/app.js`
2. Controlla il dashboard EmailJS per errori
3. Assicurati di aver configurato correttamente il servizio email
4. Controlla la cartella spam della tua email

### Il Sito Sembra Strano su Mobile

1. Controlla che il viewport meta tag sia presente (è nel file HTML)
2. Prova a ricaricare la pagina
3. Verifica la cache del browser (Ctrl+Shift+R)

## 📁 Struttura File

```
Sito_Semplice/
├── index.html                    # Markup HTML principale
├── css/
│   ├── style.css                 # Stili home e animazioni
│   └── pages.css                 # Stili pagine premio e form
├── js/
│   └── email.js                  # Logica EmailJS e invio risposte
├── pages/
│   ├── coffee.html               # Percorso 20%
│   ├── choice.html               # Percorso 100%
│   └── confirm.html              # Conferma
├── .vscode/
│   └── launch.json                # Avvio diretto con F5
├── config/
│   └── .env.example              # Template configurazione (non committare)
└── README.md                     # Questo file
```

## 🔐 Sicurezza

- ✅ **EmailJS Public Key**: È pubblica per design (non è un segreto)
- ✅ **Email hardcodata**: `pelatoesotico23@gmail.com` è nel codice (intenzionale)
- ✅ **No backend**: Solo frontend, nessun server da gestire
- ⚠️ **Rate Limiting**: Configura nel dashboard EmailJS se vuoi limitare i tentativi

## 🤝 Supporto

Se hai problemi:

1. Controlla la console del browser (F12 → Console)
2. Leggi gli errori e googla il messaggio
3. Verifica la configurazione EmailJS
4. Ricarica `index.html` per ripartire dal principio

## 💡 Idee per Miglioramenti Futuri

- [ ] Aggiungi confetti al click su 100%
- [ ] Salva le risposte in un database
- [ ] Crea una dashboard per visualizzare le risposte ricevute
- [ ] Aggiungi suoni alle animazioni
- [ ] Personalizza il messaggio di bonus
- [ ] Aggiungi countdown timer prima del messaggio di bonus
- [ ] Dark mode

## 📄 Licenza

Libero di usare, modificare e condividere! ❤️

---

**Creato con ❤️ per rendere più dolce la tua proposta!**

Buona fortuna! 🍀💕
