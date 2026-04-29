// ========================================
// GOOGLE APPS SCRIPT - Backend Email (CORS FIX)
// ========================================

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
    
    // IMPORTANT : Retourner une réponse avec les headers CORS
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Email envoyé avec succès'
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Réponse d'erreur
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Erreur : ' + error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

// IMPORTANT : Fonction pour gérer les requêtes GET (CORS preflight)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'Service actif'
  }))
  .setMimeType(ContentService.MimeType.JSON);
}
