class Task {
    constructor(node, adat) {
        this.node = node;
        this.adat = adat;
        this.taskNev = this.node.children(".tasknev");
        this.taskLeiras = this.node.children(".leiras");
        this.taskDatum = this.node.children(".datum");
        this.taskUsernev = this.node.children(".user");
        this.taskAllapot = this.node.children(".allapot");
        this.taskTorles = this.node.children(".tor").children("button");
        
        this.setAdat(this.adat);

        this.taskTorles.on("click ", () => {
            this.kattintasTrigger("torles");
            console.log("toroltem magam");

        });
    }

    
    setAdat(adat) {
        this.adat = adat;
        this.taskNev.text(adat.id + ". feladat");
        this.taskLeiras.text(adat.leiras);
        this.taskDatum.text(adat.datum);
        this.taskUsernev.text(adat.user.nev);
        this.taskAllapot.text(adat.allapot);
    }
    kattintasTrigger(esemenyneve) {

        let esemeny = new CustomEvent(esemenyneve, {

            detail: this.adat, 
        });
        window.dispatchEvent(esemeny);
    }


}