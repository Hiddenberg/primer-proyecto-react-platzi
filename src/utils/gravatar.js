import md5 from 'md5';

const gravatar = (email) => {
   const base = 'https://secure.gravatar.com/gravatar/';
   const formattedEmail = email.trim().toLowerCase();
   const hash = md5(formattedEmail, { encoding: 'binary' });
   return `${base}${hash}`
}

export default gravatar;