function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const destinataire = "Reda.amor@douceurmaroc.com";
    const sujet = "🔔 Nouveau contact depuis Douceur.ma";

    const corps = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
        </style>
      </head>
      <body style="background: #f0f4f8; padding: 40px 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header avec logo et titre -->
          <div style="background: linear-gradient(135deg, #0f1f45 0%, #1a3068 50%, #2a4a8a 100%); padding: 40px 30px; text-align: center;">
            <div style="display: inline-block; margin-bottom: 20px;">
              <img src="https://i.ibb.co/ZrfTYbk/LOGO.png" alt="Douceur" style="height: 65px; display: block; margin: 0 auto;" />
            </div>
            <h2 style="margin: 0; color: white; font-size: 22px; font-weight: 600;">Nouveau message de contact</h2>
          </div>
          
          <!-- Badge Type de client -->
          <div style="padding: 30px 30px 20px 30px;">
            <div style="display: inline-block; background: linear-gradient(135deg, #c8102e 0%, #a50d26 100%); color: white; padding: 8px 20px; border-radius: 20px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
              ${data.type}${data.autre_precision ? ' - ' + data.autre_precision : ''}
            </div>
          </div>
          
          <!-- Informations du contact -->
          <div style="padding: 0 30px 30px 30px;">
            <table style="width: 100%; border-collapse: separate; border-spacing: 0 12px;">
              <tr>
                <td style="padding: 18px 20px; background: #f8fafc; border-radius: 10px; vertical-align: top;">
                  <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Nom complet
                  </div>
                  <div style="color: #1a3068; font-size: 16px; font-weight: 600;">${data.nom}</div>
                </td>
              </tr>
              
              <tr>
                <td style="padding: 18px 20px; background: #f8fafc; border-radius: 10px; vertical-align: top;">
                  <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Téléphone
                  </div>
                  <div style="color: #1a3068; font-size: 16px; font-weight: 600;">
                    <a href="tel:${data.telephone}" style="color: #1a3068; text-decoration: none;">${data.telephone}</a>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td style="padding: 18px 20px; background: #f8fafc; border-radius: 10px; vertical-align: top;">
                  <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                  </div>
                  <div style="color: #1a3068; font-size: 16px; font-weight: 600;">
                    <a href="mailto:${data.email}" style="color: #2a4a8a; text-decoration: none;">${data.email}</a>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td style="padding: 18px 20px; background: #f8fafc; border-radius: 10px; vertical-align: top;">
                  <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Ville
                  </div>
                  <div style="color: #1a3068; font-size: 16px; font-weight: 600;">${data.ville}</div>
                </td>
              </tr>
            </table>
          </div>
          
          <!-- Message -->
          <div style="padding: 0 30px 40px 30px;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Message
            </div>
            <div style="background: linear-gradient(to right, #c8102e 4px, transparent 4px), #f8fafc; padding: 20px 20px 20px 24px; border-radius: 10px; color: #334155; font-size: 15px; line-height: 1.7;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #f8fafc; padding: 25px 30px; border-top: 1px solid #e2e8f0;">
            <div style="color: #94a3b8; font-size: 13px; text-align: center;">
              <div style="margin-bottom: 8px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <strong style="color: #64748b;">Date de réception :</strong> ${new Date().toLocaleString('fr-FR', {
      timeZone: 'Africa/Casablanca',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })}
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- Boutons d'action rapide -->
        <div style="max-width: 600px; margin: 25px auto 0; text-align: center;">
          <a href="mailto:${data.email}?subject=Re: Votre demande de contact Douceur" style="display: inline-block; background: white; color: #1a3068; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px; margin: 0 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.08);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a3068" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Répondre par email
          </a>
          <a href="tel:${data.telephone}" style="display: inline-block; background: white; color: #1a3068; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px; margin: 0 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.08);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a3068" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Appeler maintenant
          </a>
        </div>
        
      </body>
      </html>
    `;

    GmailApp.sendEmail(destinataire, sujet, '', {
      htmlBody: corps,
      replyTo: data.email,
      name: 'Formulaire Douceur.ma'
    });

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Email envoyé avec succès'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Erreur : ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok'
  })).setMimeType(ContentService.MimeType.JSON);
}
