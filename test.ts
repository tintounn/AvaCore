class A {
    public static nom: string;

    public static getGetters(): string[] {
        return Object.keys(this.constructor.prototype).filter(name => {
            return typeof Object.getOwnPropertyDescriptor(this.prototype, name)["get"] === "function"
        });
    }

    public static getSetters(): string[] {
        return Object.keys(this.constructor.prototype).filter(name => {
            return typeof Object.getOwnPropertyDescriptor(this.prototype, name)["set"] === "function"
        });
    }
}

class B extends A {
    public test: string;
}


for(let vars in B.prototype) {
    console.log(vars);
}