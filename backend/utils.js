import jwt from 'jsonwebtoken';

export const baseUrl = () =>
  process.env.BASE_URL
    ? process.env.BASE_URL
    : process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'https://yourdomain.com';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Admin Token' });
  }
};

export const sendEmail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const emailOptions = {
    from: ` <${process.env.EMAIL_HOST}>`,
    to: option.email,
    subject: option.subject,
    text: option.message,
  };
  await transporter.sendEmail(emailOptions);
};

export const forgotMessage = (resetUrl, user) => {
  return `
          <body 
            style="
              color: rgb(68, 68, 68);
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            "
          >
            <h2 class="title" style="text-align: center">Reset Your Password</h2>
            <h4>Hello ${user.name},</h4>
            <p>
              Tap the link below to reset your account password. If you didn't request a
              new password, you can safely delete this email.
      
              <a
                class="reset-btn"
                style="
                  color: rgb(68, 68, 68);
                  font-weight: 900;
                  text-decoration: none;
                  text-transform: uppercase;
                "
                target="blank"
                href="${resetUrl}"
              >
                Reset Password
              </a>
            </p>
      
            <p>
              If that doesn't work, copy and paste the following link in your browser:
            </p>
            <div class="text-link">
              <a target="blank" href="${resetUrl}"> ${resetUrl} </a>
            </div>
      
            <p class="footer" style="font-size: small; font-style: italic">
              <span>Thank you,</span> <br />
              <span>Websom Team</span>
            </p>
          </body>
      `;
};
