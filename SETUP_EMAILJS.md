# 📧 GUIDA COMPLETA - Setup EmailJS con Template Corretto

## ⚠️ IMPORTANTE: Template Risposta Automatica NON Va Bene

Se hai usato "Risposta Automatica" nel template, **DEVI CAMBIARLO**.
La risposta automatica non è adatta a ricevere notifiche del sito.

Segui questa guida per creare il template CORRETTO.

---

## Passo 1: Crea Account EmailJS (Se Non Fatto)

1. Vai su **https://www.emailjs.com/**
2. Clicca **Sign Up**
3. Registrati (gratis - no carta di credito richiesta)
4. Completa la verifica email

---

## Passo 2: Configura il Servizio Email

1. Accedi al dashboard: **https://dashboard.emailjs.com/**
2. Vai a **Email Services** (menu a sinistra)
3. Clicca **Add New Service**
4. Scegli il provider (Gmail, Outlook, Yahoo, etc.)
5. Autorizza l'accesso
6. **Copia il Service ID** (es: `service_abc123`)

---

## Passo 3: CREA IL TEMPLATE EMAIL CORRETTO ⭐

### ❌ NON usare "Risposta Automatica"

La risposta automatica NON ti farà ricevere le notifiche del sito!

### ✅ Creare Template Custom

1. Nel dashboard, vai a **Email Templates**
2. Clicca **Create New Template**
3. Riempi il form così:

#### Nome Template
```
Nome: Notifiche Sito Romantico
```

#### Email To
```
{{to_email}}
```
(Questo viene dal JavaScript del sito)

#### Subject (Oggetto Email)
```
💕 Nuova risposta dal sito!
```

#### Email Body (Corpo Email) - IMPORTANTE!
```
Ciao! 👋

Ho ricevuto una nuova risposta dal sito!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 DETTAGLI RISPOSTA:

🎯 Scelta: {{user_choice}}

{{#restaurant_selected}}
🍽️ Ristorante: {{restaurant_selected}}
{{/restaurant_selected}}

📝 Messaggio: {{choice_message}}

⏰ Data/Ora: {{timestamp}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Link del sito: [Inserisci URL quando deployato]

Divertitevi! 💕
```

### Spiegazione Variabili:

- `{{to_email}}` = Email destinataria (pelatoesotico23@gmail.com)
- `{{user_choice}}` = La percentuale scelta (20% o 100%)
- `{{restaurant_selected}}` = Nome ristorante (appare solo se 100%)
- `{{choice_message}}` = Messaggio completo con scelta
- `{{timestamp}}` = Data e ora della risposta

### Sintassi Condizionale:
```
{{#restaurant_selected}}
...Testo che appare solo se c'è un ristorante...
{{/restaurant_selected}}
```

---

## Passo 4: Salva il Template e Copia l'ID

1. Clicca **Save**
2. Vedrai il **Template ID** (es: `template_xyz123`)
3. **COPIA QUESTO ID**

---

## Passo 5: Inserisci i Valori in `js/app.js`

Apri il file: `D:\PROGRAMMAZIONE\SitiWeb\PROGETTI\Sito_Semplice\js\email.js`

Modifica le linee 6-8:

```javascript
const EMAILJS_PUBLIC_KEY = 'INCOLLA_QUI_PUBLIC_KEY';      // Da Dashboard → Account
const EMAILJS_SERVICE_ID = 'service_l8scudt';            // Da Email Services
const EMAILJS_TEMPLATE_ID = 'INCOLLA_QUI_TEMPLATE_ID';   // Dal Template che hai creato
```

**Esempio:**
```javascript
const EMAILJS_PUBLIC_KEY = 'w5z9x2c4v1b8n3m6a0p';
const EMAILJS_SERVICE_ID = 'service_8f9k3l2m1';
const EMAILJS_TEMPLATE_ID = 'template_o5p2q7r4s';
```

---

## Passo 6: Test Email

1. Apri `index.html` in VS Code e premi `F5` per aprirlo nel browser
2. Clicca sul bottone **20%**
3. Dovrebbe ricevere un'email in `pelatoesotico23@gmail.com`

### Email di Test Conterrà:
```
💕 Nuova risposta dal sito!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 DETTAGLI RISPOSTA:

🎯 Scelta: 20%

📝 Messaggio: Scelta: 20%

⏰ Data/Ora: 03/09/2026, 21:19:16

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Passo 7: Test Completo

1. **Test 20%**: Clicca 20% → Ricevi email con "Scelta: 20%"
2. **Test 100%**: Clicca 100% → Scegli ristorante → Ricevi email con "Scelta: 100% - Ristorante: [nome]"

### Email di Test 100% + Ristorante:
```
💕 Nuova risposta dal sito!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 DETTAGLI RISPOSTA:

🎯 Scelta: 100%

🍽️ Ristorante: Sushi

📝 Messaggio: Scelta: 100% - Ristorante: Sushi

⏰ Data/Ora: 03/09/2026, 21:25:40

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🐛 Troubleshooting

### "Non ricevo l'email"

1. ✅ Verifica che i 3 valori siano incollati correttamente in `js/app.js`
2. ✅ Controlla la cartella **SPAM** dell'email (potrebbe esserci)
3. ✅ Nel dashboard EmailJS, vai a **Diagnostics** e controlla se ci sono errori
4. ✅ Controlla che il browser sia collegato a Internet e che la libreria EmailJS CDN sia stata caricata

### "Email arriva ma senza variabili (mostra {{variabile}})"

❌ Problema: Template ha variabili sbagliate

✅ Soluzione:
- Vai nel template EmailJS
- Verifica che le variabili siano: `{{user_choice}}`, `{{restaurant_selected}}`, ecc.
- Non usare: `{{choice_message}}` con maiuscole diverse
- Salva di nuovo il template

### "La email mostra 'Risposta Automatica'"

❌ Hai usato il template sbagliato

✅ Crea un nuovo template seguendo il "Passo 3" di questa guida

---

## ✅ Checklist Finale

Prima di deployare, verifica:

- [ ] ✅ Account EmailJS creato
- [ ] ✅ Servizio email configurato (Gmail/Outlook/etc)
- [ ] ✅ Template EMAIL custom creato (NON risposta automatica!)
- [ ] ✅ Template contiene le variabili corrette
- [ ] ✅ Service ID copiato in `js/app.js` (linea 7)
- [ ] ✅ Template ID copiato in `js/app.js` (linea 8)
- [ ] ✅ Public Key copiato in `js/app.js` (linea 6)
- [ ] ✅ Test email ricevuta per 20%
- [ ] ✅ Test email ricevuta per 100% + ristorante
- [ ] ✅ Email contiene le variabili corrette
- [ ] ✅ Nessun errore in console (F12)

---

## 🚀 Una Volta Pronto

1. Deploy il sito su Netlify/Vercel
2. Condividi il link
3. **Le email inizieranno ad arrivare automaticamente!** 💕

---

**Domande?** Leggi questa guida di nuovo oppure controlla il [Supporto EmailJS](https://www.emailjs.com/docs/)

**Buona fortuna!** 🎉
