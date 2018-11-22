import{User} from '../models/user.model';
import{baseList} from '../../backend/baseContent.module';

export class UserList {
    category: string;
    liste: User[];
}

export class ListService {
    public users:UserList;

    constructor(private categ:string) {
        this.users = new UserList();
        this.users.category = categ;
        this.users.liste = baseList;
    }

    public store(prenom:string,nom:string) {
        console.log("recu prenom, nom:" + prenom + ":" + nom);
        this.users.liste.unshift(new User(prenom,nom));
        console.log("STORE in this users : " + this.users.liste[0].prenom + " " + this.users.liste[0].nom );
    }

    public giveList():Array<User> {
        console.log("GIVE this.users :");
        console.log(JSON.stringify(this.users.liste));
        return(this.users.liste);
    }
  }