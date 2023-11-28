import { Button, buttonVariants } from './ui/button';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
    const { data: session } = useSession()
    return (
        <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full h-[65px] z-10 top-0'>
            <div className='container flex items-center justify-between'>
                <Link href='/'>
                    <img className='h-[50px]' src='/assets/logo.png' alt="" />
                </Link>

                <div className='flex'>

                    {session?.user.role == "USER" ?
                        < div className='mr-3'>
                            <Link className={buttonVariants()} href='/rastrear'>
                                Rastrear Ecomenda
                            </Link>
                        </div>
                        :
                        <div className='hidden'></div>
                    }


                    {session?.user.role == "ADMIN" ?
                        < div className='mr-3'>
                            <Link className={buttonVariants()} href='/admin'>
                                Nova Entrega
                            </Link>
                        </div>
                        :
                        <div className='hidden'></div>
                    }



                    <div className=' flex justify-center font-bold items-center mr-5 ml-5 text-lg text-center h-[50px'>
                        {session?.user.username}
                    </div>





                    <div>
                        {session?.user ? (
                            <div>
                                <Button onClick={() => signOut({
                                    redirect: true,
                                    callbackUrl: `${window.location.origin}/sign-in`
                                })} variant='destructive' >Sair</Button>
                            </div>

                        ) : (
                            <Link className={buttonVariants()} href='/sign-in'>
                                Entrar
                            </Link>
                        )}
                    </div>


                </div>

            </div>
        </div >
    );
};

export default Navbar;
