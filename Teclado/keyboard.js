const Keyboard = {
    elements: {
        main: null, //div principal
        keysContainer: null, //div das teclas
        keys: [] //contedo das teclas
    },

    // proriedades para ações de ativação e de fechar eventos
    eventHandlers: {
        // usada para teclas como backspace, enter e etc... quando tiver um clique no botão
        // um evento irá acontecer
        oninput: null,

        // usada para teclas que finalizam o evento como done
        onclose: null
    },

    properties: {
        value: "",
        // caps inicia desativado
        capsLock: false
    },

    init() {
        // Criando divs principais
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Configuração dos elementos principais
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Usando o teclado para elementos com .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            // primeira linha
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            // primeira segunda
                    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            // primeira terceira
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            // primeira quarta
             "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            // ultima linha
                                        "space"
        ];

        // Colocando os icones no HTML
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            keyElement.textContent = key;

            // Adicionando os attributos/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("mousedown", () => {
                        // Quando o botão backspace for clicado, o cursor irá apagar o ultimo caracter "(0, this.properties.value.length - 1)"
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");
                    // Quando o botão for clicado vai acionar o comando caps
                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");
                    // Quando enter for pressionado um \n vai ser adicionado, uma quebra de linha
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");
                    // Quando o botão for pressionado, será adicionado " " a frente ou seja, um espaço
                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");
                    // Quando o botão done for precionado, o teclado irá fechar
                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();
                    // vai verificar se o caps ta ativo, pra dizer como vão ficar as teclas Uppercase(caixa alta) e LowerCase(caixa baixa)
                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);
            //configurando o layout do teclado com a quebra de linha
            if ( key == "backspace" || key == "p" || key == "enter" || key == "?" ){
                fragment.appendChild(document.createElement("br"))
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        //verifica se o caps ta ativo, caso sim, coloca as teclas em maisculo (UpperCase), caso não em (LowerCase)
        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },
    //inicializa o teclado
    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },
    //fecha o teclado
    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});