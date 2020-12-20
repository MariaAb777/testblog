export default function logged({ next, router }) {
  if (localStorage.getItem('user')) {
    return router.push({ name: 'Home' });
  }

  return next();
}