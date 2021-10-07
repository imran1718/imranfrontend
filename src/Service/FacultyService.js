import axios from 'axios';
export default{
    putFaculty: function(faculty){
        var ax = axios.create({
            baseURL: "http://localhost:8080",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            ax
                .post("/faculty/insert", faculty, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },
    getAllFacultys: function(){
        var ax = axios.create({
            baseURL: "http://localhost:8080",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/faculty/getAll',
            }).then((response) => {                 
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });                       
        
    },
    deleteFaculty: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:8080",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/faculty/delete/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
}
