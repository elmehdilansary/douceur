# 📧 Instructions pour configurer le formulaire de contact

## ✅ ÉTAPE 1 : Créer le script Google Apps Script

1. **Ouvrez votre navigateur** et allez sur : https://script.google.com
2. **Connectez-vous** avec VOTRE compte Gmail personnel (celui dont vous avez le mot de passe)
3. Cliquez sur le bouton **"+ Nouveau projet"** (en haut à gauche)
4. Le projet s'ouvre avec un fichier vide nommé "Code.gs"

---

## ✅ ÉTAPE 2 : Copier le code

1. **Ouvrez le fichier** `google-apps-script.js` dans ce projet
2. **Sélectionnez TOUT le code** (Ctrl+A ou Cmd+A)
3. **Copiez** (Ctrl+C ou Cmd+C)
4. **Retournez sur Google Apps Script**
5. **Supprimez** le code par défaut dans "Code.gs"
6. **Collez** le code copié (Ctrl+V ou Cmd+V)
7. **Renommez le projet** : cliquez sur "Projet sans titre" en haut → tapez "Formulaire Douceur"

---

## ✅ ÉTAPE 3 : Déployer le script

1. Cliquez sur le bouton **"Déployer"** en haut à droite
2. Sélectionnez **"Nouveau déploiement"**
3. À côté de "Sélectionner un type", cliquez sur l'icône **⚙️ (engrenage)**
4. Sélectionnez **"Application Web"**
5. Configurez les paramètres :
   - **Description** : "Formulaire de contact Douceur"
   - **Exécuter en tant que** : **Moi** (votre email)
   - **Qui a accès** : **Tout le monde**
6. Cliquez sur **"Déployer"**

---

## ✅ ÉTAPE 4 : Autoriser l'application

1. Une fenêtre s'ouvre : **"Autorisation requise"**
2. Cliquez sur **"Autoriser l'accès"**
3. **Sélectionnez votre compte Gmail**
4. Google affiche un avertissement : **"Google n'a pas vérifié cette application"**
   - Cliquez sur **"Paramètres avancés"**
   - Cliquez sur **"Accéder à Formulaire Douceur (non sécurisé)"**
5. Cliquez sur **"Autoriser"**

---

## ✅ ÉTAPE 5 : Copier l'URL de déploiement

1. Une fenêtre s'affiche avec **"Déploiement créé avec succès"**
2. **Copiez l'URL** sous "URL de l'application Web"
   - Elle ressemble à : `https://script.google.com/macros/s/AKfycbz...XXXXXXX.../exec`
3. **GARDEZ CETTE URL** — vous en aurez besoin pour l'étape suivante

---

## ✅ ÉTAPE 6 : Configurer le site web

1. **Ouvrez le fichier** `index.html` dans ce projet
2. **Cherchez la ligne** (environ ligne 1456) :
   ```javascript
   const GOOGLE_SCRIPT_URL = 'VOTRE_URL_GOOGLE_SCRIPT_ICI';
   ```
3. **Remplacez** `VOTRE_URL_GOOGLE_SCRIPT_ICI` par l'URL que vous avez copiée
4. **Sauvegardez** le fichier (Ctrl+S ou Cmd+S)

**Exemple :**
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzXXXXXXXXX/exec';
```

---

## ✅ ÉTAPE 7 : Tester le formulaire

1. **Ouvrez** `index.html` dans votre navigateur
2. **Scrollez** jusqu'à la section "Contact"
3. **Remplissez le formulaire** avec des données de test
4. Cliquez sur **"Envoyer le message →"**
5. Attendez le message de confirmation
6. **Vérifiez** votre boîte de réception **elmehdilansary4@gmail.com**
7. Vous devriez recevoir un email avec les informations du formulaire

---

## 🎉 C'EST TERMINÉ !

Le formulaire est maintenant connecté et envoie automatiquement tous les messages à **elmehdilansary4@gmail.com**.

---

## ❓ Besoin d'aide ?

Si vous rencontrez un problème :
1. Vérifiez que l'URL est correctement copiée dans `index.html`
2. Vérifiez que le script est bien déployé sur Google Apps Script
3. Testez à nouveau le formulaire

---

## 📝 Notes importantes

- ✅ Les emails arrivent dans **elmehdilansary4@gmail.com**
- ✅ Le script tourne sur **votre compte Gmail personnel**
- ✅ C'est **100% gratuit**
- ✅ Illimité en nombre de messages
