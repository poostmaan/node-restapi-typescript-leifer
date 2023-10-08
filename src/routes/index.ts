import { Router } from 'express';
import { readdirSync } from 'fs';

const router = Router();
const PATH = __dirname;

const cleanFileName = (filename: string) => filename.split('.').shift();

readdirSync(PATH).filter((filename) => {
    let prefixRouteName = cleanFileName(filename);
    if(prefixRouteName != "index") {

        // Cargador dinamico de rutas
        import(`./${filename}`).then((moduleName) => {
            console.log(`Added ${prefixRouteName} router`)
            router.use(`/${prefixRouteName}`, moduleName.router);
        });

    }
})

console.log(PATH)

export { router }