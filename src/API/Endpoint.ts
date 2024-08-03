import { Preferences } from "@capacitor/preferences";
import { getPlatforms, LifeCycleCallback } from "@ionic/react";
import axios from "axios";

export class AuthController {
    static async Reg(_first_name: string, _surname: string, _second_name:string, _email: string, _password: string, _role: boolean) {
        //Проверяем платформу, на которой запущено приложение
        const platforms = getPlatforms();
        if (platforms.includes("desktop")) {
            const query = await axios.post("http://localhost:8000/api/auth/register",
            {
                first_name: _first_name, surname: _surname,
                second_name: _second_name, password: _password, role: _role, email: _email
            },
            {
                headers: {"Access-Control-Allow-Origin": "*"},
            }
        );
            try {
                const data: RegResp = await query.data;

                //Сохраняем апи-ключ локально
                await Preferences.set({
                    key: 'api_key',
                    value: data.api_key
                })
            } catch(error) {
                alert("Ошибка в ответе");
            }
            
        } else {

        }
    }

    static Login() {
        //Проверяем платформу
    }
}

export class ClientController {
    static async getMe() {
        const apiKey = (await Preferences.get({key: "api_key"})).value;

        const platforms = getPlatforms();
        if (platforms.includes("desktop")) {
            const query = await axios.get("http://localhost:8000/api/client/me",
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "api-key": apiKey
                },
            }
        );
            try {
                const data: ClientResp = await query.data;
                return data;
            } catch(error) {
                alert("Ошибка в ответе");
            }
            
        } else {

        }
    }
}