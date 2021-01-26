import md5 from 'md5';

const Gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binaty' });
  return `${base}${hash}`;
};

export default Gravatar;
