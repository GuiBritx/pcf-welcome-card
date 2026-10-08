import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class WelcomeCard implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private container: HTMLDivElement;

    /**
     * Empty constructor.
     */
    constructor() {
        // Empty
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this.container = container;
        this.container.style.width = "100%";
        this.container.style.height = "100%";
    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        const today = new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "full"
        }).format(new Date());

        this.container.replaceChildren();

        const card = document.createElement("article");
        card.style.boxSizing = "border-box";
        card.style.width = "100%";
        card.style.minHeight = "180px";
        card.style.padding = "28px";
        card.style.borderRadius = "20px";
        card.style.background = "linear-gradient(135deg, #102a43 0%, #197c8c 100%)";
        card.style.color = "#ffffff";
        card.style.fontFamily = "'Segoe UI', sans-serif";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.justifyContent = "space-between";
        card.style.boxShadow = "0 12px 30px rgba(16, 42, 67, 0.22)";

        const eyebrow = document.createElement("div");
        eyebrow.textContent = "WELCOME";
        eyebrow.style.fontSize = "12px";
        eyebrow.style.fontWeight = "700";
        eyebrow.style.letterSpacing = "2px";
        eyebrow.style.color = "#a7f3d0";

        const title = document.createElement("h1");
        title.textContent = "Welcome";
        title.style.margin = "10px 0 6px";
        title.style.fontSize = "32px";
        title.style.lineHeight = "1.1";
        title.style.fontWeight = "700";

        const message = document.createElement("p");
        message.textContent = "Que bom ter você por aqui. Tenha um excelente dia!";
        message.style.margin = "0";
        message.style.fontSize = "16px";
        message.style.lineHeight = "1.5";
        message.style.color = "#e0f2f1";

        const date = document.createElement("time");
        date.dateTime = new Date().toISOString().split("T")[0];
        date.textContent = today;
        date.style.display = "block";
        date.style.marginTop = "22px";
        date.style.fontSize = "13px";
        date.style.color = "#c8f7e8";

        const content = document.createElement("div");
        content.append(eyebrow, title, message);
        card.append(content, date);
        this.container.appendChild(card);
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {};
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
