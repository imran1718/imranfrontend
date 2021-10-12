import axios from 'axios';
export default{
    putCollege: function(college){
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
                .post("/college/insert", college, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },   
    getAllColleges: function(){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/college/getAll',
            }).then((response) => {                 
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });                       
        
    },
    deleteCollege: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/college/delete/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
    getCollege: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/college/get/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },  
    loginCollege: function(logobj){
        var axis = axios.create({
            baseURL: "http://localhost:9090",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            axis
                .post("/college/login",logobj, config)
                .then(response => {
               
                 
                    resolve(response);
                })
                .catch(err => {
               
                    reject(err);
                });
        }); 
    
    }  
    
    }
    
 
