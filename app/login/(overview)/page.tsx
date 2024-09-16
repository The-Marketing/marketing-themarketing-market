import { signIn } from 'auth';

import { Button } from '@/components/ui/variants/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/variants/card';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            This demo uses google for authentication.
          </CardDescription>
        </CardHeader>
        <CardFooter>
         
            <Button onClick={() => signIn()} className="w-full">Sign in with google</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
