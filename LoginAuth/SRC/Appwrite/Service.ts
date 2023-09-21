import { Text } from "@rneui/themed";
import { ID, Account, Client } from "appwrite";
import Config from "react-native-config";
import Snackbar from "react-native-snackbar";

const AppWriteClient = new Client()

const APPWRITE_ENDPOINT : string = Config.APPWRITE_ENDPOINT!
const APPWRITE_PROJECT_ID : string = Config.APPWRITE_PROJECT_ID!

type CreateUserAccount = {
    email: string
    password: string
    name : string
}
type LoginUserAccount = {
    email: string
    password: string
}

class AppwriteSerive {
    account
    constructor() {
        AppWriteClient
          .setEndpoint(APPWRITE_ENDPOINT)
          .setProject(APPWRITE_PROJECT_ID)
        this.account = new Account(AppWriteClient)
    }
    // Create new recod inside appwrite

    async CreateAccount({email, password, name} : CreateUserAccount) {
        try {
            const UserAccount = await this.account.create(
                ID.unique(),
                email,
                name,
                password
            )
            if(UserAccount) {
                return this.LoginAccount({email, password})
            } else {
                return UserAccount
            }
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_SHORT
            })
            console.log("Appwrite serives : Create Account error ::: " + error)
        }
    }

    async LoginAccount ({email, password} : LoginUserAccount) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_SHORT
            })
            console.log("Appwrite serives : Login Account error ::: " + error)
        }
    }

    async getUserAccount () {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite serives : CurrentAccount error ::: " + error)
        }
    }

    async LogoutAccount() {
        try {
            return await this.account.deleteSession('current')
        } catch (error) {
            console.log("Appwrite serives : CurrentAccount error ::: " + error)
        }
    }
 
}

export default AppwriteSerive