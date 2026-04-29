// ========================================
// GOOGLE APPS SCRIPT - Backend Email
// ========================================
// 
// INSTRUCTIONS :
// 1. Allez sur https://script.google.com
// 2. Cliquez sur "Nouveau projet"
// 3. Collez ce code
// 4. Cliquez sur "Déployer" > "Nouveau déploiement"
// 5. Sélectionnez "Application Web"
// 6. "Exécuter en tant que" : MOI
// 7. "Qui a accès" : Tout le monde
// 8. Cliquez sur "Déployer"
// 9. Copiez l'URL de déploiement
// 10. Remplacez VOTRE_URL_GOOGLE_SCRIPT dans index.html

function doPost(e) {
  try {
    // Récupérer les données du formulaire
    const data = JSON.parse(e.postData.contents);
    
    // Email de destination
    const destinataire = "elmehdilansary4@gmail.com";
    
    // Construire le sujet
    const sujet = "🔔 Nouveau contact depuis Douceur.ma";
    
    // Construire le corps de l'email en HTML
    const corps = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #1a3068; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0;">📧 Nouveau contact depuis Douceur.ma</h2>
        </div>
        
        <div style="background: #f4f7fc; padding: 30px; border-radius: 0 0 8px 8px;">
          <h3 style="color: #1a3068; margin-top: 0;">Informations du contact :</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #1a3068;">👤 Nom :</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #1a3068;">📞 Téléphone :</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.telephone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #1a3068;">✉️ Email :</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #1a3068;">🏙️ Ville :</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.ville}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #1a3068;">🏢 Type :</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.type}${data.autre_precision ? ' - ' + data.autre_precision : ''}</td>
            </tr>
          </table>
          
          <h3 style="color: #1a3068; margin-top: 30px; margin-bottom: 10px;">💬 Message :</h3>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #c8102e;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>📅 Reçu le : ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Casablanca' })}</p>
          </div>
        </div>
      </div>
    `;
    
    // Envoyer l'email
    GmailApp.sendEmail(destinataire, sujet, '', {
      htmlBody: corps,
      replyTo: data.email,
      name: 'Formulaire Douceur.ma'
    });
    
    // Réponse de succès
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Email envoyé avec succès'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Réponse d'erreur
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Erreur : ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
