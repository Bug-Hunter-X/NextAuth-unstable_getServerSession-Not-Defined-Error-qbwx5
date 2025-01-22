```javascript
import {unstable_getServerSession} from 'next-auth';

const {authOptions} = require('./utils/auth')

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function Profile() {
  return (
    <div>Profile</div>
  );
}
```