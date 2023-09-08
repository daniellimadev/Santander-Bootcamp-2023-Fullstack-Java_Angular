/**
 * Classes
 */

/*
    data modifiers:
    public
    private
    protected
 */

    class Character {
        name?: string;
        stregth: number;
        skill: number;
    
        constructor(name: string, stregth: number, skill: number) {
            this.name = name;
            this.stregth = stregth;
            this.skill = skill;
        }
    
        attack() : void {
            console.log(`Attack with ${this.stregth} points`);
        }
    }

    // Magician: subclass

    class Magician extends Character {
        magicPoints: number;
    
        constructor(
            name: string,
            stregth: number,
            skill: number,
            magicPoints: number
            ) {
            super(name, stregth, skill);
            this.magicPoints = magicPoints;
        }
    }

    
    const p1 = new Character("Ryu",30,97);
    const p2 = new Magician("",28,70,100);
    console.log(p1);
    p1.attack();

// ------------------------------------------------------


