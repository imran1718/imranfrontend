import axios from 'axios';
export default{
    putFeedback: function(collegefeedback){
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
                .post("/collegefeedback/insert", collegefeedback, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },   
    insertFeedback: function(studentfeedback){
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
                .post("/studentfeedback/insert", studentfeedback, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },   
    getAllFeedbacks: function(){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/studentfeedback/getAll',
            }).then((response) => {                 
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });                       
        
    },
    getAllcFeedbacks: function(){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/collegefeedback/getAll',
            }).then((response) => {                 
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });                       
        
    },
}