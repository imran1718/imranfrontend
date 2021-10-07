import axios from 'axios';
export default{
    putFeedback: function(collegefeedback){
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
            baseURL: "http://localhost:8080",
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
}