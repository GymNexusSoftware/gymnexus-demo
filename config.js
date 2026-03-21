// System Configuration - My Fitness App Base
// Este ficheiro permite gerir todas as configurações globais da aplicação de forma fácil.
const AppConfig = {
    // Configurações Gerais
    appName: "GymNexus",
    appTitle: "GymNexus - Energia & Conexão",
    logoPath: "gymnexus.jpeg", // Novo logo fornecido
    heroPath: "hero1.png", // Imagem de fundo principal
    defaultAdminEmail: "admin@nexusdemo.com",
    
    // Configurações de Cores (Paleta baseada no logo: Rosa #E598A4 e Preto #111111)
    theme: {
        primary: "#E598A4",       // Rosa do logo
        primaryHover: "#D48692",  // Rosa ligeiramente mais escuro
        background: "#0A0A0A"     // Preto profundo para contraste premium
    },

    // Configuração da Base de Dados (Firebase)
    // Substitua pelas credenciais do seu projeto Firebase gratuito
    firebaseConfig: {
        apiKey: "AIzaSyCJvgzCq-d2Htb2nXDW3TkvKortaW3hGKw",
        authDomain: "nexusdemo-a23b2.firebaseapp.com",
        databaseURL: "https://nexusdemo-a23b2-default-rtdb.europe-west1.firebasedatabase.app", // Verifique se é "europe-west1"
        projectId: "nexusdemo-a23b2",
        storageBucket: "nexusdemo-a23b2.firebasestorage.app",
        messagingSenderId: "207221408875",
        appId: "1:207221408875:web:8395daa96877fec6e6dd2e",
        measurementId: "G-VX4QLRJDHV",
        serverKey: "YOUR_SERVER_KEY" // ATENÇÃO: chave legada para notificações (Cloud Messaging)
    }
};
