import { defineStore } from 'pinia'
import { userEmpty } from '../utils/constants';

export interface User {
    id: number;
    nombre: string;
    correo: string;
    cargo: string;
    departamento: string;
    oficina: string;
    estadoCuenta: string;
}

export const useUserStore = defineStore('user',{
    state: () => (null as unknown as User),

    actions: {
        setUserData(user: User) {
            this.id = user.id;
            this.nombre = user.nombre;
            this.correo = user.correo;
            this.cargo = user.cargo;
            this.departamento = user.departamento;
            this.oficina = user.oficina;
            this.estadoCuenta = user.estadoCuenta;
        },
        logout() {
            this.id = userEmpty.id;
            this.nombre = userEmpty.nombre;
            this.correo = userEmpty.correo;
            this.cargo = userEmpty.cargo;
            this.departamento = userEmpty.departamento;
            this.oficina = userEmpty.oficina;
            this.estadoCuenta = userEmpty.estadoCuenta;
        },
    },

    getters: {
        getFullName(): string {
            if (this.id === 0) return ''
            return `${this.nombre}`;
        },
        getInitialsName(): string {
            if (this.id === 0) return ''
            const name = this.nombre.split(' ');
            return `${name[0].charAt(0)}${name[1].charAt(0)}`;
        },
        getFullPosition(): string {
            if (this.id === 0) return ''
            return `${this.cargo} - ${this.departamento}`;
        },
        getFullOffice(): string {
            if (this.id === 0) return ''
            return `${this.oficina}`;
        },
    }


})