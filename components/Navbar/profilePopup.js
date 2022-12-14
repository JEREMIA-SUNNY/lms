
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react'

const ProfilePopup = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="relative bg-white rounded-full inline-flex text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <Image
                        width={40}
                        height={40}
                        src={'/demoimage/Profile.png'}
                        alt="Sample image"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 flex flex-col">
                        <Menu.Item>
                            <Link className='p-2' href={'/profile'}>
                                Profile
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link className='p-2' href={'/setting'}>
                                Setting
                            </Link>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default ProfilePopup;
