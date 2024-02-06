import Input from '@/components/Input';
import React from 'react';
import Button from '@/components/Button';
import Template from '@/components/Template';


export default function AdminLogin() {
  const id = React.useId();
  const adminId = `${id}-admin`;
  const passwordId = `${id}-password`;
  return (
    <>
      <Template>
        <form>
          <Input error="a" type={undefined} label="usuário" id={adminId} />
          <Input error="a" type={undefined} label="senha" id={passwordId} />
          <Button content="logar" />
        </form>
      </Template>
    </>
  );
}
