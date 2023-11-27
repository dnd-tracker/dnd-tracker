type SpriteType = 'animals' | 'characters' | 'monsters' | 'items' | 'floors'

type NatureSprite =
  | 'brick'
  | 'stone-tile'
  | 'slate-tile'
  | 'wood'
  | 'grass'
  | 'high-grass'
  | 'path'
  | 'dirt'
  | 'sand'

type FloorSprite =
  | 'brick'
  | 'stone-tile'
  | 'slate-tile'
  | 'wood'
  | 'grass'
  | 'high-grass'
  | 'path'
  | 'dirt'
  | 'sand'
  | 'water'
  | 'lava'
  | 'remove'

type AnimalSprite =
  | 'ant'
  | 'bat'
  | 'bedbug'
  | 'beetle'
  | 'boar'
  | 'cat'
  | 'chicken'
  | 'cockroach'
  | 'cow'
  | 'crab'
  | 'dog'
  | 'duck'
  | 'fox'
  | 'goat'
  | 'monkey'
  | 'pig'
  | 'rat'
  | 'scarab'
  | 'sheep'
  | 'spider'
  | 'tick'
  | 'toad'
  | 'turtle'
  | 'wolf'

type CharacterSprite =
  | 'acolyte'
  | 'angel'
  | 'archon'
  | 'assassin'
  | 'barmaid'
  | 'battlemage'
  | 'blademaster'
  | 'champion'
  | 'cherub'
  | 'child'
  | 'cleric'
  | 'crusader'
  | 'damsel'
  | 'druid'
  | 'drunkard'
  | 'elf-archer'
  | 'elf-enchanter'
  | 'elf-lord'
  | 'elf-wayfarer'
  | 'friar'
  | 'high-priest'
  | 'kid'
  | 'knight'
  | 'nercomancer'
  | 'paladin'
  | 'pixie'
  | 'priest'
  | 'pyromancer'
  | 'ranger'
  | 'rogue'
  | 'shepard'
  | 'slinger'
  | 'soldier'
  | 'sorceress'
  | 'swordsman'
  | 'villager'
  | 'wanderer'

type MonsterSprite =
  | 'abomination'
  | 'ancient-fighter'
  | 'aqua-drake'
  | 'archer'
  | 'balor'
  | 'beholder'
  | 'bestial'
  | 'bladeguard'
  | 'bony-soldier'
  | 'brawler'
  | 'bronze-adult-dragon'
  | 'bronze-wyrmling'
  | 'cadaver'
  | 'copper-adult-dragon'
  | 'copper-wyrmling'
  | 'crawler'
  | 'cyclops'
  | 'demon-eye'
  | 'demon'
  | 'demonling'
  | 'demonspaw'
  | 'deva'
  | 'earth-elemental'
  | 'ettin'
  | 'fire-elemental'
  | 'fles-golem'
  | 'fomorian'
  | 'ghoul'
  | 'gnoll-grunt'
  | 'gnoll-pikeman'
  | 'goblin-occultist'
  | 'goblin-fanatic'
  | 'goblin-archer'
  | 'goblin-wolf-rider'
  | 'goop'
  | 'gouger'
  | 'great-wyvern'
  | 'green-adultdragon'
  | 'green-wyrmling'
  | 'gremlin'
  | 'grimlock'
  | 'grunt'
  | 'harpy'
  | 'ice-golem'
  | 'imp'
  | 'intellect-devourer'
  | 'iron-golem'
  | 'jelly'
  | 'lizardfolk-archer'
  | 'lizardfolk-spearman'
  | 'lizardfolk-gladiator'
  | 'merfolk-aquamancer'
  | 'merfolk-impaler'
  | 'merfolk-mystic'
  | 'merfolk-scout'
  | 'mimic'
  | 'mud-wyvern'
  | 'orc-mage'
  | 'orc-savage'
  | 'orc-shaman'
  | 'orge'
  | 'planetar'
  | 'red-adult-dragon'
  | 'red-wyrmling'
  | 'revenant'
  | 'scoundrel'
  | 'seraph'
  | 'shambler'
  | 'skeleton'
  | 'skull'
  | 'slaad'
  | 'slime'
  | 'spellslinger'
  | 'stalker'
  | 'toxic-hound'
  | 'treant'
  | 'troll'
  | 'viridian-drake'
  | 'watcher'
  | 'water-elemental'
  | 'white-adult-dragon'
  | 'white-wyrmling'
  | 'wisp'
  | 'witch'
  | 'zombie'

type ItemSprite = 'chair' | 'chest' | 'coin' | 'crate' | 'door' | 'key' | 'lever' | 'stairs' | 'table' | 'trap' | 'vase'

type Sprite = NatureSprite | AnimalSprite | CharacterSprite | MonsterSprite | ItemSprite | FloorSprite

interface SpriteMap {
  nature: NatureSprite[],
  animals: AnimalSprite[],
  characters: CharacterSprite[],
  monsters: MonsterSprite[],
  items: ItemSprite[],
  floors: FloorSprite[]
}

type FabricBrush = 'Pencil'|'Eraser'|'Spray'

interface SpriteMetaData {
  label: string
  value: string
  variations?: number
  size?: number
}

interface SpriteData extends SpriteMetaData {
  url: string
}

interface Coords {
  x: number,
  y: number
}
