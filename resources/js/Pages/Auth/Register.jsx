import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        phone: '',
        password_confirmation: '',
        c_name: '',
        fname: '',
        lname: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        residential: '',
        liftgate: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>

                <div className='mt-4'>
                    <InputLabel htmlFor="c_name" value="Company Name (Account Username)" />

                    <TextInput
                        id="c_name"
                        name="c_name"
                        value={data.c_name}
                        className="mt-1 block w-full"
                        autoComplete="c_name"
                        onChange={(e) => setData('c_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.c_name} className="mt-2" />
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="fname" value="First Name" />

                    <TextInput
                        id="fname"
                        name="fname"
                        value={data.fname}
                        className="mt-1 block w-full"
                        autoComplete="fname"
                        onChange={(e) => setData('fname', e.target.value)}
                        required
                    />

                    <InputError message={errors.fname} className="mt-2" />
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="lname" value="Last Name" />

                    <TextInput
                        id="lname"
                        name="lname"
                        value={data.lname}
                        className="mt-1 block w-full"
                        autoComplete="lname"
                        onChange={(e) => setData('lname', e.target.value)}
                        required
                    />

                    <InputError message={errors.lname} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="phone" value="Phone Number" />

                    <TextInput
                        id="phone"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="street" value="Street Address" />

                    <TextInput
                        id="street"
                        name="street"
                        value={data.street}
                        className="mt-1 block w-full"
                        autoComplete="street"
                        onChange={(e) => setData('street', e.target.value)}
                        required
                    />

                    <InputError message={errors.street} className="mt-2" />
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="city" value="City" />

                    <TextInput
                        id="city"
                        name="city"
                        value={data.city}
                        className="mt-1 block w-full"
                        autoComplete="city"
                        onChange={(e) => setData('city', e.target.value)}
                        required
                    />

                    <InputError message={errors.city} className="mt-2" />
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="state" value="State" />

                    <TextInput
                        id="state"
                        name="state"
                        value={data.state}
                        className="mt-1 block w-full"
                        autoComplete="state"
                        onChange={(e) => setData('state', e.target.value)}
                        required
                    />

                    <InputError message={errors.state} className="mt-2" />
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="zip" value="Zip Code   " />

                    <TextInput
                        id="zip"
                        name="zip"
                        value={data.zip}
                        className="mt-1 block w-full"
                        autoComplete="zip"
                        onChange={(e) => setData('zip', e.target.value)}
                        required
                    />

                    <InputError message={errors.zip} className="mt-2" />
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="residential" value="Residential?" />

                    <TextInput
                        id="residential"
                        name="residential"
                        value={data.residential}
                        className="mt-1 block w-full"
                        autoComplete="residential"
                        onChange={(e) => setData('residential', e.target.value)}
                        required
                    />

                    <InputError message={errors.residential} className="mt-2" />
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="liftgate" value="Need Lift Gata?" />

                    <TextInput
                        id="liftgate"
                        name="liftgate"
                        value={data.liftgate}
                        className="mt-1 block w-full"
                        autoComplete="liftgate"
                        onChange={(e) => setData('liftgate', e.target.value)}
                        required
                    />

                    <InputError message={errors.liftgate} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
