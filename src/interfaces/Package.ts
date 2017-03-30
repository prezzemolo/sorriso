/**
 * Package: interface of package.json
 */
export interface Package {
     name: string,
     version: string,
     description: string,
     main: string,
     types?: string,
     scripts?: {
         [name: string]: string
     },
     repository?: {
        type: string,
        url: string,
     },
     author: string,
     license: string,
     bugs?: {
        url: string,
     },
     homepage?: string,
     devDependencies?: {
        [name: string]: string
     },
     dependencies?: {
        [name: string]: string
     }
}
