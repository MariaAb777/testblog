export default function auth({ next, router }) {
  console.log('TEST::::')
  if (!localStorage.getItem('user')) {
    return router.push({ name: 'Login' });
  }

  return next();
}