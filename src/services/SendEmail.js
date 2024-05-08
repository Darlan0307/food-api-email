import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: myEmail,
    pass: myPassword,
  },
});

const SendEmail = async (email) => {
  try {
    transport.sendMail({
      from: myEmail,
      to: email,
      subject: "App Food Novidades",
      html: '<h1>Seja bem-vindo(a) ao nosso universo de del&iacute;cias!</h1><p>Agradecemos por se cadastrar e nos permitir te enviar as &uacute;ltimas novidades, ofertas imperd&iacute;veis e promo&ccedil;&otilde;es exclusivas que v&atilde;o agu&ccedil;ar seu paladar.</p><h2>Prepare-se para uma experiência gastronômica incrível:</h2><ul><li><strong>Descubra restaurantes incríveis:</strong>      Encontre o lugar perfeito para saciar seus desejos, desde culinárias internacionais até pratos caseiros com aquele sabor de vó.</li><li><strong>Peça seus pratos favoritos:</strong>Com apenas alguns cliques, você recebe sua comida no conforto de casa ou do trabalho. Rápido, fácil e prático!</li><li><strong>Ofertas e promoções exclusivas:</strong>Prepare-se para economizar e aproveitar ainda mais seus momentos gastronômicos.</li></ul><br/><h3><a href="https://foods-ashy.vercel.app/">App Food</a>:Seu guia para um mundo de sabores!</h3>',
      text: "Seja bem-vindo(a) ao nosso universo de del&iacute;cias!Agradecemos por se cadastrar e nos permitir te enviar as &uacute;ltimas novidades, ofertas imperd&iacute;veis e promo&ccedil;&otilde;es exclusivas que v&atilde;o agu&ccedil;ar seu paladar.",
    });

    return "mensagem enviada com sucesso!";
  } catch (error) {
    return error;
  }
};

export default SendEmail;
