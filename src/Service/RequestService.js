import axios from 'axios';
export default{

    insertSendrequest: function(sendrequest){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            ax
                .post("/sendrequest/insert", sendrequest, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },
    getAllsendrequests: function(){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/sendrequest/getAll',
            }).then((response) => {                 
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });                       
        
    },   
}