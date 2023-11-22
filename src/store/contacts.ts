import { map } from 'nanostores'

export interface IContact {
	name: string
	email: string
	message: string
}

export const $contact = map<IContact>({
	name: 'Jason Quach',
	email: 'thuanqh@gmail.com',
	message: 'To Do something news!'
})

export function updateContact({name, email, message}: IContact) {
	$contact.set({name, email, message})
}