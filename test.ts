import "reflect-metadata";

function property(target: object, propertyKey: string) {
    let columns: string[] = Reflect.getMetadata("ok", target.constructor) || [];
    console.log(columns);
    columns.push(propertyKey);
    Reflect.defineMetadata("ok", columns, target.constructor);
}

function classs(target: object, propertyKey: string) {

}

class Point {
	@property x: number;
	@property y: number;
}
