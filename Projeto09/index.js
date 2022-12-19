const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
        user: "claudiney.guilherme.sa06@aluno.ifce.edu.br",
        pass: "guiguisa"
    }
})

transporter.sendMail({
    from: "INFRA IF <claudiney.guilherme.06@aluno.ifce.edu.br>",
    to: "infraif2022@gmail.com",
    subject: "Presença Confirmada",
    text: "Sua presença foi confirmada no evento do IFCE. Esperamos você!",
    html: "<h3>Sua presença foi confirmada no evento do IFCE. Esperamos você!</h3>"
}).then(message => {
    console.log(message)
}).catch(err =>{
    console.log(err)
})