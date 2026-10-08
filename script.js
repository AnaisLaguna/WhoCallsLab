/* =========================================================
   KASPERSKY WHO CALLS — SECURITY LAB
   SCRIPT.JS COMPLETO
========================================================= */


/* =========================================================
   VARIABLES GLOBALES
========================================================= */

let currentCall = null;
let currentMessage = null;

let callAnalysisTimer = null;
let messageAnalysisTimer = null;


/* =========================================================
   UTILIDAD — CAMBIAR PANTALLA
========================================================= */

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".phone-screen");

    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    const target =
        document.getElementById(screenId);

    if (target) {
        target.classList.remove("hidden");
    }
}


/* =========================================================
   RELOJ DEL TELÉFONO
========================================================= */

function updatePhoneTime() {

    const element =
        document.getElementById("phoneTime");

    if (!element) return;

    const now = new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    element.textContent =
        `${hours}:${minutes}`;
}


updatePhoneTime();

setInterval(
    updatePhoneTime,
    1000
);


/* =========================================================
   INICIO DEL LABORATORIO
========================================================= */

function startSimulation() {

    clearAllTimers();

    currentCall = null;
    currentMessage = null;

    showScreen("phoneHome");

}


/* =========================================================
   REGRESAR A HOME
========================================================= */

function goHome() {

    clearAllTimers();

    currentCall = null;
    currentMessage = null;

    showScreen("phoneHome");

}


/* =========================================================
   MÓDULO DE LLAMADAS
========================================================= */

function openCallsModule() {

    clearAllTimers();

    currentCall = null;

    showScreen("callsMenuScreen");

}


/* =========================================================
   DATOS DE LLAMADAS
========================================================= */

const callData = {

    bank: {

        icon: "🏦",

        name: "Supuesto banco",

        number: "+52 55 0000 1842",

        title: "Posible fraude financiero",

        category: "Fraude financiero",

        risk: "RIESGO ALTO",

        signals: [

            {
                icon: "🏦",
                title: "Suplantación de institución",
                text:
                    "La llamada aparenta representar a una institución financiera."
            },

            {
                icon: "🚨",
                title: "Solicitud urgente",
                text:
                    "El escenario busca provocar una decisión rápida del usuario."
            },

            {
                icon: "🔐",
                title: "Posible solicitud de información",
                text:
                    "La interacción podría intentar obtener datos personales o financieros."
            }

        ]

    },


    package: {

        icon: "📦",

        name: "Servicio de paquetería",

        number: "+52 55 0000 2671",

        title: "Posible fraude de paquetería",

        category: "Entrega sospechosa",

        risk: "RIESGO ALTO",

        signals: [

            {
                icon: "📦",
                title: "Pretexto de entrega",
                text:
                    "La llamada utiliza un supuesto problema con una entrega."
            },

            {
                icon: "⏱️",
                title: "Presión para actuar",
                text:
                    "El objetivo es que el usuario resuelva el supuesto problema inmediatamente."
            },

            {
                icon: "💳",
                title: "Posible solicitud de pago",
                text:
                    "La interacción podría terminar solicitando datos de pago o información personal."
            }

        ]

    },


    prize: {

        icon: "🎁",

        name: "Centro de premios",

        number: "+52 55 0000 3915",

        title: "Posible fraude de premio",

        category: "Promoción sospechosa",

        risk: "RIESGO ALTO",

        signals: [

            {
                icon: "🎁",
                title: "Premio inesperado",
                text:
                    "La llamada anuncia un beneficio que el usuario no solicitó."
            },

            {
                icon: "💰",
                title: "Incentivo económico",
                text:
                    "Utiliza un supuesto premio para generar confianza."
            },

            {
                icon: "⚠️",
                title: "Posible solicitud posterior",
                text:
                    "El contacto podría solicitar información o un pago para liberar el premio."
            }

        ]

    },


    support: {

        icon: "🛠️",

        name: "Soporte técnico",

        number: "+52 55 0000 4726",

        title: "Posible ingeniería social",

        category: "Soporte técnico sospechoso",

        risk: "RIESGO ALTO",

        signals: [

            {
                icon: "🛠️",
                title: "Identidad no verificada",
                text:
                    "El supuesto soporte técnico no puede verificarse con la información disponible."
            },

            {
                icon: "🔐",
                title: "Posible acceso remoto",
                text:
                    "Este tipo de interacción puede intentar obtener acceso o información del dispositivo."
            },

            {
                icon: "⚠️",
                title: "Pretexto técnico",
                text:
                    "Utiliza un supuesto problema de seguridad para generar confianza."
            }

        ]

    },


    silent: {

        icon: "🔇",

        name: "Llamada silenciosa",

        number: "+52 55 0000 5834",

        title: "Comportamiento sospechoso",

        category: "Llamada silenciosa",

        risk: "RIESGO MEDIO",

        signals: [

            {
                icon: "🔇",
                title: "Ausencia de interlocutor",
                text:
                    "La llamada se conecta sin que exista una conversación inmediata."
            },

            {
                icon: "☎️",
                title: "Patrón automatizado",
                text:
                    "El comportamiento puede estar asociado con sistemas automatizados de marcación."
            },

            {
                icon: "⚠️",
                title: "Comportamiento inusual",
                text:
                    "Una llamada silenciosa puede utilizarse para validar que un número está activo."
            }

        ]

    }

};


/* =========================================================
   MOSTRAR LLAMADA
========================================================= */

function showCall(callId) {

    clearAllTimers();

    const data =
        callData[callId];

    if (!data) return;

    currentCall = callId;


    const icon =
        document.getElementById("callerIcon");

    const name =
        document.getElementById("callerName");

    const number =
        document.getElementById("callerNumber");


    if (icon) {
        icon.textContent =
            data.icon;
    }

    if (name) {
        name.textContent =
            data.name;
    }

    if (number) {
        number.textContent =
            data.number;
    }


    showScreen("callScreen");
}


/* =========================================================
   RESPONDER / ANALIZAR LLAMADA
========================================================= */

function answerCall() {

    if (!currentCall) return;

    clearCallAnalysis();

    showScreen("analysisScreen");


    const status =
        document.getElementById(
            "analysisStatus"
        );

    const progress =
        document.getElementById(
            "analysisProgressBar"
        );


    const steps = [

        document.getElementById("step1"),

        document.getElementById("step2"),

        document.getElementById("step3")

    ];


    const messages = [

        "Identificando categoría...",

        "Comparando señales disponibles...",

        "Clasificando llamada..."

    ];


    let step =
        0;


    function nextStep() {

        if (step >= steps.length) {

            if (status) {
                status.textContent =
                    "Identificación completada.";
            }

            if (progress) {
                progress.style.width =
                    "100%";
            }


            callAnalysisTimer =
                setTimeout(
                    showCallProfile,
                    700
                );

            return;
        }


        steps.forEach(item => {

            if (item) {

                item.classList.remove(
                    "active",
                    "complete"
                );

            }

        });


        for (
            let i = 0;
            i < step;
            i++
        ) {

            if (steps[i]) {

                steps[i].classList.add(
                    "complete"
                );

            }

        }


        if (steps[step]) {

            steps[step].classList.add(
                "active"
            );

        }


        if (status) {

            status.textContent =
                messages[step];

        }


        if (progress) {

            progress.style.width =
                `${((step + 1) / steps.length) * 100}%`;

        }


        step++;


        callAnalysisTimer =
            setTimeout(
                nextStep,
                900
            );

    }


    nextStep();

}


/* =========================================================
   PERFIL DE LLAMADA
========================================================= */

function showCallProfile() {

    clearAllTimers();


    const data =
        callData[currentCall];


    if (!data) return;


    const icon =
        document.getElementById(
            "profileIcon"
        );

    const title =
        document.getElementById(
            "profileTitle"
        );

    const category =
        document.getElementById(
            "profileCategory"
        );

    const risk =
        document.getElementById(
            "profileRisk"
        );

    const signals =
        document.getElementById(
            "profileSignals"
        );


    if (icon) {

        icon.textContent =
            data.icon;

    }


    if (title) {

        title.textContent =
            data.title;

    }


    if (category) {

        category.textContent =
            data.category;

    }


    if (risk) {

        risk.textContent =
            data.risk;

    }


    if (signals) {

        signals.innerHTML = "";


        data.signals.forEach(
            signal => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "profile-signal";


                item.innerHTML = `

                    <div class="signal-icon">
                        ${signal.icon}
                    </div>

                    <div>

                        <strong>
                            ${signal.title}
                        </strong>

                        <p>
                            ${signal.text}
                        </p>

                    </div>

                `;


                signals.appendChild(
                    item
                );

            }
        );

    }


    showScreen(
        "callProfileScreen"
    );

}


/* =========================================================
   SEÑALES DE LLAMADA
========================================================= */

function showCallSignals() {

    const data =
        callData[currentCall];


    if (!data) return;


    const title =
        document.getElementById(
            "signalsScenarioTitle"
        );

    const list =
        document.getElementById(
            "signalsList"
        );


    if (title) {

        title.textContent =
            `Señales detectadas · ${data.category}`;

    }


    if (list) {

        list.innerHTML = "";


        data.signals.forEach(
            signal => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "signal-item";


                item.innerHTML = `

                    <div class="signal-item-icon">
                        ${signal.icon}
                    </div>

                    <div class="signal-item-content">

                        <strong>
                            ${signal.title}
                        </strong>

                        <p>
                            ${signal.text}
                        </p>

                    </div>

                `;


                list.appendChild(
                    item
                );

            }
        );

    }


    showScreen(
        "callSignalsScreen"
    );

}


/* =========================================================
   VOLVER AL PERFIL
========================================================= */

function backToCallProfile() {

    showCallProfile();

}


/* =========================================================
   CERRAR PERFIL
========================================================= */

function closeCallProfile() {

    clearAllTimers();

    if (currentCall) {

        showScreen("callScreen");

    } else {

        showScreen("callsMenuScreen");

    }

}


/* =========================================================
   BLOQUEAR LLAMADA
========================================================= */

function blockCurrentCall() {

    clearAllTimers();


    const data =
        callData[currentCall];


    const message =
        document.getElementById(
            "blockedMessage"
        );


    if (
        message &&
        data
    ) {

        message.textContent =
            `${data.name} fue bloqueado. ` +
            `La interacción fue evitada antes de compartir información.`;

    }


    showScreen(
        "blockedCallScreen"
    );

}


/* =========================================================
   RECHAZAR LLAMADA
========================================================= */

function rejectCall() {

    clearAllTimers();

    showScreen(
        "rejectedCallScreen"
    );

}


/* =========================================================
   CERRAR BLOQUEO / RECHAZO
========================================================= */

function closeBlockedCall() {

    clearAllTimers();

    currentCall = null;

    showScreen(
        "callsMenuScreen"
    );

}


/* =========================================================
   MENSAJES — VARIABLES
========================================================= */


/*
   WhatsApp:
   - Premio
   - Crédito
   - Seguridad de cuenta
   - Contacto desconocido

   SMS:
   - Seguridad bancaria
   - Paquetería
*/


const messageData = {

    /* =====================================================
       WHATSAPP — PREMIO
    ===================================================== */

    whatsappPrize: {

        app: "WhatsApp",

        icon: "🎁",

        sender: "Centro de Premios",

        channel: "WhatsApp",

        body:
            "¡Has sido seleccionado para recibir un premio exclusivo! " +
            "Confirma tus datos para reclamarlo antes de que expire.",

        link:
            "https://premio-verificacion.example",

        category:
            "Fraude de premio / phishing",

        risk:
            "RIESGO ALTO",

        resultIcon:
            "🎁",

        resultTitle:
            "Posible fraude de premio",

        signals: [

            {
                icon: "🎁",
                title: "Premio inesperado",
                description:
                    "El mensaje anuncia un beneficio que el usuario no solicitó."
            },

            {
                icon: "⏱️",
                title: "Presión de tiempo",
                description:
                    "La supuesta expiración busca provocar una acción inmediata."
            },

            {
                icon: "🔗",
                title: "Enlace externo",
                description:
                    "El mensaje dirige al usuario hacia un sitio externo."
            }

        ],

        targets: [

            "Información personal",

            "Credenciales",

            "Datos financieros"

        ],

        protection:
            "No abras el enlace ni proporciones información personal. " +
            "Verifica cualquier promoción directamente desde el sitio o aplicación oficial. " +
            "Bloquea y reporta el mensaje."

    },


    /* =====================================================
       WHATSAPP — CRÉDITO
    ===================================================== */

    whatsappCredit: {

        app: "WhatsApp",

        icon: "💳",

        sender: "Crédito Express",

        channel: "WhatsApp",

        body:
            "Tu crédito ha sido aprobado. " +
            "Para liberar el monto disponible, confirma tus datos " +
            "y completa el proceso de validación.",

        link:
            "https://credito-validacion.example",

        category:
            "Suplantación financiera",

        risk:
            "RIESGO ALTO",

        resultIcon:
            "💳",

        resultTitle:
            "Posible fraude financiero",

        signals: [

            {
                icon: "💰",
                title: "Oferta financiera no solicitada",
                description:
                    "Utiliza un supuesto crédito aprobado como elemento de confianza."
            },

            {
                icon: "🔐",
                title: "Solicitud de información",
                description:
                    "El proceso podría solicitar datos personales o financieros."
            },

            {
                icon: "🔗",
                title: "Enlace de validación",
                description:
                    "La acción solicitada depende de acceder a un sitio externo."
            }

        ],

        targets: [

            "Datos financieros",

            "Información personal",

            "Credenciales"

        ],

        protection:
            "No proporciones datos bancarios ni información personal. " +
            "Consulta cualquier crédito directamente desde la institución financiera correspondiente."

    },


    /* =====================================================
       WHATSAPP — SEGURIDAD
    ===================================================== */

    whatsappAccount: {

        app: "WhatsApp",

        icon: "🔐",

        sender: "Seguridad de cuenta",

        channel: "WhatsApp",

        body:
            "Detectamos actividad inusual en tu cuenta. " +
            "Para evitar la suspensión, verifica tu identidad inmediatamente.",

        link:
            "https://seguridad-cuenta.example",

        category:
            "Robo de credenciales",

        risk:
            "RIESGO ALTO",

        resultIcon:
            "🔐",

        resultTitle:
            "Posible robo de credenciales",

        signals: [

            {
                icon: "🚨",
                title: "Alerta inesperada",
                description:
                    "El mensaje intenta generar preocupación sobre la seguridad de la cuenta."
            },

            {
                icon: "⏱️",
                title: "Urgencia",
                description:
                    "La supuesta suspensión busca acelerar la decisión del usuario."
            },

            {
                icon: "🔗",
                title: "Verificación mediante enlace",
                description:
                    "Se solicita acceder a un enlace para supuestamente verificar la cuenta."
            }

        ],

        targets: [

            "Credenciales de acceso",

            "Cuenta del usuario",

            "Información personal"

        ],

        protection:
            "No introduzcas contraseñas ni códigos de verificación. " +
            "Abre directamente la aplicación o sitio oficial para comprobar el estado de tu cuenta."

    },


    /* =====================================================
       WHATSAPP — CONTACTO
    ===================================================== */

    whatsappContact: {

        app: "WhatsApp",

        icon: "👤",

        sender: "Contacto desconocido",

        channel: "WhatsApp",

        body:
            "Hola, cambié de número. Necesito pedirte un favor. " +
            "¿Podemos hablar un momento?",

        link:
            "",

        category:
            "Ingeniería social",

        risk:
            "RIESGO MEDIO",

        resultIcon:
            "👤",

        resultTitle:
            "Posible ingeniería social",

        signals: [

            {
                icon: "👤",
                title: "Identidad no confirmada",
                description:
                    "El remitente no puede verificarse con la información disponible."
            },

            {
                icon: "💬",
                title: "Generación de confianza",
                description:
                    "El mensaje intenta iniciar una conversación antes de realizar una posible solicitud."
            },

            {
                icon: "⚠️",
                title: "Posible pretexto",
                description:
                    "La conversación podría evolucionar hacia una petición sensible."
            }

        ],

        targets: [

            "Confianza del usuario",

            "Información personal",

            "Posibles datos sensibles"

        ],

        protection:
            "No compartas información personal ni financiera. " +
            "Confirma la identidad mediante otro medio de contacto conocido."

    },


    /* =====================================================
       SMS — BANCO
    ===================================================== */

    smsBank: {

        app: "SMS",

        icon: "🏦",

        sender: "Seguridad bancaria",

        channel: "SMS",

        body:
            "Detectamos una operación inusual en tu cuenta. " +
            "Verifica tu actividad para evitar restricciones.",

        link:
            "https://banco-verificacion.example",

        category:
            "Smishing bancario",

        risk:
            "RIESGO ALTO",

        resultIcon:
            "🏦",

        resultTitle:
            "Posible smishing bancario",

        signals: [

            {
                icon: "🏦",
                title: "Suplantación bancaria",
                description:
                    "El mensaje aparenta proceder de una institución financiera."
            },

            {
                icon: "🚨",
                title: "Actividad sospechosa",
                description:
                    "Utiliza una supuesta operación inusual para generar preocupación."
            },

            {
                icon: "🔗",
                title: "Enlace de verificación",
                description:
                    "Solicita acceder a un enlace para revisar la operación."
            }

        ],

        targets: [

            "Credenciales bancarias",

            "Datos financieros",

            "Cuenta bancaria"

        ],

        protection:
            "No accedas al enlace desde el SMS. " +
            "Abre directamente la aplicación bancaria o utiliza el sitio oficial."

    },


    /* =====================================================
       SMS — PAQUETERÍA
    ===================================================== */

    smsPackage: {

        app: "SMS",

        icon: "📦",

        sender: "Servicio de paquetería",

        channel: "SMS",

        body:
            "Tu paquete no pudo ser entregado. " +
            "Actualiza los datos de entrega para programar un nuevo intento.",

        link:
            "https://entrega-validacion.example",

        category:
            "Smishing de paquetería",

        risk:
            "RIESGO ALTO",

        resultIcon:
            "📦",

        resultTitle:
            "Posible fraude de paquetería",

        signals: [

            {
                icon: "📦",
                title: "Problema de entrega",
                description:
                    "Utiliza un supuesto inconveniente con un paquete como pretexto."
            },

            {
                icon: "⏱️",
                title: "Acción requerida",
                description:
                    "Busca que el usuario resuelva inmediatamente el supuesto problema."
            },

            {
                icon: "🔗",
                title: "Enlace externo",
                description:
                    "El mensaje dirige al usuario hacia una página para actualizar datos."
            }

        ],

        targets: [

            "Información personal",

            "Datos de pago",

            "Información de entrega"

        ],

        protection:
            "No abras el enlace del SMS. " +
            "Consulta el envío directamente desde la aplicación o sitio oficial de la empresa de paquetería."

    }

};


/* =========================================================
   MÓDULO DE MENSAJES
========================================================= */

function openMessagesModule() {

    clearAllTimers();

    currentMessage = null;

    showScreen(
        "messagesMenuScreen"
    );

}


/* =========================================================
   WHATSAPP
========================================================= */

function openWhatsApp() {

    clearAllTimers();

    showScreen(
        "whatsappScreen"
    );

}


/* =========================================================
   SMS
========================================================= */

function openSMS() {

    clearAllTimers();

    showScreen(
        "smsScreen"
    );

}


/* =========================================================
   ABRIR MENSAJE
========================================================= */

function openMessage(messageId) {

    clearAllTimers();


    const data =
        messageData[messageId];


    if (!data) {

        console.error(
            "Mensaje no encontrado:",
            messageId
        );

        return;

    }


    currentMessage =
        messageId;


    const appBadge =
        document.getElementById(
            "messageAppBadge"
        );

    const sender =
        document.getElementById(
            "messageSender"
        );

    const channel =
        document.getElementById(
            "messageChannel"
        );

    const bubble =
        document.getElementById(
            "messageBubble"
        );

    const link =
        document.getElementById(
            "messageLink"
        );


    if (appBadge) {

        appBadge.textContent =
            data.icon;

    }


    if (sender) {

        sender.textContent =
            data.sender;

    }


    if (channel) {

        channel.textContent =
            data.channel;

    }


    if (bubble) {

        bubble.textContent =
            data.body;

    }


    if (link) {

        if (data.link) {

            link.textContent =
                data.link;

            link.style.display =
                "block";

        } else {

            link.textContent =
                "";

            link.style.display =
                "none";

        }

    }


    showScreen(
        "messageDetailScreen"
    );

}


/* =========================================================
   ANALIZAR MENSAJE
========================================================= */

function analyzeCurrentMessage() {

    if (!currentMessage) {
        return;
    }


    clearAllTimers();

    resetMessageAnalysis();


    showScreen(
        "messageAnalysisScreen"
    );


    const status =
        document.getElementById(
            "messageAnalysisStatus"
        );

    const progress =
        document.getElementById(
            "messageProgressBar"
        );


    const steps = [

        document.getElementById(
            "messageStep1"
        ),

        document.getElementById(
            "messageStep2"
        ),

        document.getElementById(
            "messageStep3"
        ),

        document.getElementById(
            "messageStep4"
        )

    ];


    const messages = [

        "Identificando remitente y contexto...",

        "Evaluando contenido y urgencia...",

        "Analizando enlace y señales...",

        "Determinando objetivo y clasificación..."

    ];


    let currentStep =
        0;


    function nextStep() {

        if (
            currentStep >=
            steps.length
        ) {

            if (status) {

                status.textContent =
                    "Análisis completado.";

            }


            if (progress) {

                progress.style.width =
                    "100%";

            }


            messageAnalysisTimer =
                setTimeout(
                    showPhishingResult,
                    700
                );


            return;

        }


        steps.forEach(
            step => {

                if (step) {

                    step.classList.remove(
                        "active",
                        "complete"
                    );

                }

            }
        );


        for (
            let i = 0;
            i < currentStep;
            i++
        ) {

            if (steps[i]) {

                steps[i].classList.add(
                    "complete"
                );

            }

        }


        if (steps[currentStep]) {

            steps[currentStep].classList.add(
                "active"
            );

        }


        if (status) {

            status.textContent =
                messages[currentStep];

        }


        if (progress) {

            progress.style.width =
                `${((currentStep + 1) / steps.length) * 100}%`;

        }


        currentStep++;


        messageAnalysisTimer =
            setTimeout(
                nextStep,
                900
            );

    }


    nextStep();

}


/* =========================================================
   RESULTADO DEL MENSAJE
========================================================= */

function showPhishingResult() {

    clearAllTimers();


    const data =
        messageData[currentMessage];


    if (!data) {
        return;
    }


    const icon =
        document.getElementById(
            "phishingResultIcon"
        );

    const title =
        document.getElementById(
            "phishingResultTitle"
        );

    const risk =
        document.getElementById(
            "phishingResultRisk"
        );

    const category =
        document.getElementById(
            "phishingResultCategory"
        );

    const signals =
        document.getElementById(
            "phishingSignals"
        );

    const targets =
        document.getElementById(
            "phishingTargets"
        );


    /* -----------------------------------------
       RESULTADO
    ----------------------------------------- */

    if (icon) {

        icon.textContent =
            data.resultIcon;

    }


    if (title) {

        title.textContent =
            data.resultTitle;

    }


    if (risk) {

        risk.textContent =
            data.risk;

        risk.classList.remove(
            "risk-high",
            "risk-medium",
            "risk-low"
        );


        if (
            data.risk.includes("ALTO")
        ) {

            risk.classList.add(
                "risk-high"
            );

        }
        else if (
            data.risk.includes("MEDIO")
        ) {

            risk.classList.add(
                "risk-medium"
            );

        }
        else {

            risk.classList.add(
                "risk-low"
            );

        }

    }


    if (category) {

        category.textContent =
            data.category;

    }


    /* -----------------------------------------
       SEÑALES
    ----------------------------------------- */

    if (signals) {

        signals.innerHTML =
            "";


        data.signals.forEach(
            signal => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "phishing-signal";


                item.innerHTML = `

                    <div class="signal-icon">
                        ${signal.icon}
                    </div>

                    <div class="signal-content">

                        <strong>
                            ${signal.title}
                        </strong>

                        <p>
                            ${signal.description}
                        </p>

                    </div>

                `;


                signals.appendChild(
                    item
                );

            }
        );

    }


    /* -----------------------------------------
       OBJETIVO PROBABLE
    ----------------------------------------- */

    if (targets) {

        targets.innerHTML =
            "";


        data.targets.forEach(
            target => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "target-item";


                item.innerHTML = `

                    <span>●</span>

                    <span>
                        ${target}
                    </span>

                `;


                targets.appendChild(
                    item
                );

            }
        );

    }


    showScreen(
        "phishingResultScreen"
    );

}


/* =========================================================
   RECOMENDACIÓN / PROTECCIÓN
========================================================= */

function showMessageProtection() {

    clearAllTimers();


    const data =
        messageData[currentMessage];


    if (!data) {
        return;
    }


    const protectionText =
        document.getElementById(
            "protectionText"
        );


    if (protectionText) {

        protectionText.textContent =
            data.protection;

    }


    showScreen(
        "messageProtectionScreen"
    );

}


/* =========================================================
   VOLVER A LA LISTA DE MENSAJES
========================================================= */

function backToMessageList() {

    clearAllTimers();


    if (!currentMessage) {

        openMessagesModule();

        return;

    }


    const data =
        messageData[currentMessage];


    if (
        data &&
        data.app === "SMS"
    ) {

        openSMS();

    }
    else {

        openWhatsApp();

    }

}


/* =========================================================
   CERRAR FLUJO DE MENSAJES
========================================================= */

function closeMessageFlow() {

    clearAllTimers();

    currentMessage = null;

    showScreen(
        "phoneHome"
    );

}


/* =========================================================
   RESET DEL ANÁLISIS DE MENSAJE
========================================================= */

function resetMessageAnalysis() {

    const status =
        document.getElementById(
            "messageAnalysisStatus"
        );

    const progress =
        document.getElementById(
            "messageProgressBar"
        );


    if (status) {

        status.textContent =
            "Preparando análisis...";

    }


    if (progress) {

        progress.style.width =
            "0%";

    }


    for (
        let i = 1;
        i <= 4;
        i++
    ) {

        const step =
            document.getElementById(
                `messageStep${i}`
            );


        if (step) {

            step.classList.remove(
                "active",
                "complete"
            );

        }

    }

}


/* =========================================================
   RESET DEL ANÁLISIS DE LLAMADA
========================================================= */

function clearCallAnalysis() {

    const status =
        document.getElementById(
            "analysisStatus"
        );

    const progress =
        document.getElementById(
            "analysisProgressBar"
        );


    if (status) {

        status.textContent =
            "Iniciando identificación...";

    }


    if (progress) {

        progress.style.width =
            "0%";

    }


    for (
        let i = 1;
        i <= 3;
        i++
    ) {

        const step =
            document.getElementById(
                `step${i}`
            );


        if (step) {

            step.classList.remove(
                "active",
                "complete"
            );

        }

    }

}


/* =========================================================
   LIMPIAR TODOS LOS TEMPORIZADORES
========================================================= */

function clearAllTimers() {

    if (callAnalysisTimer) {

        clearTimeout(
            callAnalysisTimer
        );

        callAnalysisTimer =
            null;

    }


    if (messageAnalysisTimer) {

        clearTimeout(
            messageAnalysisTimer
        );

        messageAnalysisTimer =
            null;

    }

}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updatePhoneTime();

        showScreen(
            "phoneHome"
        );

    }
);