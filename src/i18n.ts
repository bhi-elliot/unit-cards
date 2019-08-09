var word4word: { [s: string]: string; } = {
    "Attack:": "Attaque :",
    "Defense:": "Défense :",
    "Power:": "Puissance :",
    "Toughness:": "Endurance :",
    "Morale:": "Morale :",
    "Size:": "Effectif :",
    "Commanded by": "Commandé par",

    'None': "Aucun",
    'Bugbear': "Gobelours",
    'Dragonborn': "Drakéide",
    'Dwarf': "Nain",
    'Elf': "Elfe",
    'Elven (Winged)': "Elfe ailé",
    'Ghoul': "Goule",
    'Gnoll': "Gnoll",
    'Gnome': "Gnome",
    'Goblin': "Gobelin",
    'Hobgoblin': "Hobgobelin",
    'Human': "Humain",
    'Kobold': "Kobold",
    'Lizardfolk': "Homme-lézard",
    'Ogre': "Ogre",
    'Orc': "Orque",
    'Skeleton': "Squelette",
    'Treant': "Tréant",
    'Troll': "Troll",
    'Zombie': "Zombie",
    'Flying': "Volant",
    'Archers': "Archers",
    'Cavalry': "Cavalerie",
    'Levies': "Apelés",
    'Infantry': "Infanterie",
    'Siege Engine': "Engin de siège",
    'Fortification': "Fortification",

    'Green': "Novice",
    'Regular': "Normal",
    'Seasoned': "Chevronné",
    'Veteran': "Vétéran",
    'Elite': "Élite",
    'Super-Elite': "Super élite",

    'Light': "Léger",
    'Medium': "Moyen",
    'Heavy': "Lourd",
    'Super-Heavy': "Super lourd",

    'Goblinoid': "Gobelinoïde",
    'Special': "Spécial",
    'Monsterous': "Monstrueux",

    'Amphibious': 'Amphibien',
    'Bred for war': 'Élevé pour la guerre',
    'Brutal': 'Brutal',
    'Courageous': 'Courageux',
    'Eternal': 'Longue vie',
    'Frenzy': 'Frénésie',
    'Horrify': 'Horrifiant',
    'Martial': 'Martial',
    'Mindless': 'Idiot',
    'Regenerate': 'Régénération',
    'Ravenous': 'Vorace',
    'Rock-hurler': 'Lanceur de pierre',
    'Savage': 'Sauvage',
    'Stalwart': 'Vaillant',
    'Twisting Roots': 'Racines',
    'Undead': 'Mort-vivant',
    'Charge': 'Charge',
    'Always Diminished': 'Toujours diminué',

    'Unit Name': "Nom de l'unité",
    'Cost:': "Coût :",
    "Traits": "Capacités",

    "Name": "Nom",
    "Ancestry": "Ascendance",
    "Equipment": "Équipement",
    "Size": "Effectif",
    "Commander": "Commandant",
    "Experience": "Expérience",
    "Type": "Type",
    "Fortification type": "Type de fortification",
    "Fortification level": "Niveau de fortification",
    "Custom Trait": "Capacité personnalisée",
    "Attack adjustment": "Ajustement d'ttaque",
    "Defense adjustment": "Ajustement de défense",
    "Power adjustment": "Ajustement de puissance",
    "Ancestry name override": "Forcer l'ascendance",
    "Toughness adjustment": "Ajustement d'endurance",
    "Morale adjustment": "Ajustement de morale",
    "Cost adjustment": "Ajustement de coût",
    "Border color override": "Forcer la couleur de la bordure",

    'This unit does not suffer terrain penalties for fighting in water or on land.':
        "Cette unité ne subit pas les pénalités de terrain pour les batailles sur l'eau ou sur terre.",
    'This unit cannot be diminished, and cannot have disadvantage on morale checks.':
        "Cette unité ne peut pas être diminuée et ne peut pas avoir de désavantage sur les jets de morale.",
    'This unit inflicts 2 casualties on a successful power check.':
        "Cette unité inflige 2 blessures lors d'un jet de puissance réussi.",
    'Once per battle, this unit can choose to succeed on a morale check it just failed.':
        "Une fois par bataille cette unité peut choisir de réussir un test de morale auquel elle vient d'échouer.",
    'This unit cannot be horrified, and it always succeeds on morale checks to attack undead and fiends.':
        "Cette unité ne peut pas être horrifiée, elle réussi toujours ces jets de morale pour attaquer les morts-vivants et les fiélons.",
    'If this unit diminishes an enemy unit, it immediately makes a free attack against that unit.':
        "Si cette unité diminue une unité énemie elle gagne immédiatement une attaque supplémentaire sur cet énemi.",
    'If this unit inflicts a casualty on an enemy unit, that unit must make a dc 15 morale check.Failure exhausts the unit.':
        "Si cette unité blesse une unité énemie, cette unité doit réussir un jet de morale DD 15 ou être épuisée.",
    'If this unit succeeds on a power check and its size is greater than the defending unit, it inflicts 2 casualties.':
        "Cette unité inflige 2 blessures lors d'un jet de puissance réussi si l'effectif de cette unité est plus grande que leur cible.",
    'This unit cannot fail morale checks.':
        "Cette unité ne peut pas échouer à ses jets de morale.",
    'When this unit refreshes, increment its casualty die.This trait ceases to function if the unit suffers a casualty from battle magic.':
        "Quand cette unité est reposée, incrémentez son dé de blessure. Cette capacité cesse de fonctionner quand elle subit des dégâts magiques guerrière.",
    'While any enemy unit is diminished, this unit can spend a round feeding on the corpses to increment their casualty die. ':
        "Quand cette unité diminue un énemi elle peut passer un round a se nourrir des corps. Incréméntez son dé de blessure.",
    'If this unit succeeds on an attack check, it inflicts 2 casualties.Against fortifications, it inflicts 1d6 casualties.':
        "Si cette unité réussi son jet d'attaque elle inflige 2 blessures. Contre de fortifications lancez 1d6.",
    'This unit has advantage on the first attack check it makes each battle.':
        "Cette unité à l'avantage au premier jet de combat qu'elle fait à chaque bataille.",
    'Enemy battle magic has disadvantage on power checks against this unit.':
        "La magie guerrière des enemis à un désavantage contre les tests de puissance de cette unité.",
    'As an action, this unit can sap the walls of a fortification.Siege units have advantage on power checks against sapped fortifications.':
        "Pour un action cette unité peut saper des fortification. Les unités ont l'avantage aux jet de puissance contre des fortifications sapées.",
    'Green and regular troops must pass a morale check to attack this unit.Each enemy unit need only do this once.':
        "Les troupes novices et normales doivent réussir un jet de morale pour attaquer cette unité. Chaque enemi doit réussir ce jet seulement une fois.",
    'Cannot use while engaged. A Charge is an attack with advantage on the Attack check.It inflicts 2 casualties on a successful,Power check.The charging unit is then engaged with the defending unit and must make a DC 13 Morale check to disengage.':
        "Ne peut être utilisé si l'unité est engagée. Une charge est une attaque avec avantage. Elle inflige 2 dégâts sur un jet de puissance réussi. L'unité qui charge est ensuite engagé avec l'unité attaquée et doit faire un jet de morale DD13 pour se désengager.",
    'This unit it always diminished.':
        "Cette unité est toujours diminuée.",
    'This unit can attack fortifications, dealing 1d6 damage on a hit.':
        "Cette unité peut attaquer les fortifications infligeant 1d6 dégât si l'attaque touche.",
}

export function gettext(str: string): string {
    if (str in word4word && word4word[str] !== "") {
        return word4word[str];
    }
    else {
        console.log("Cannot find translation for ", str);
        return str;
    }
}