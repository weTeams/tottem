import { ItemType } from '../common'

export interface ISocial {
    linkedin?: string
    github?: string
    mail?: string
    youtube?: string
    website?: string
}

export interface UserProfile {
    id: string
    slug: string
    firstname: string
    pictureUrl: string
    biography: string
    social?: ISocial // FIXME to remove by flatten object
    label?: string
}

export interface ISection {
    id: string
    slug: string
    name: string
    index: number
}

export interface ICollection {
    id: string
    slug: string
    name: string
    date: Date | string
    items: Item[]
    detail?: string
}

export interface Item {
    id: string
    title: string
    author?: string
    imageUrl?: string
    productUrl: string
    type: ItemType
}
