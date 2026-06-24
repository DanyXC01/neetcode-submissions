class SuperHero:
    def __init__(self, name: str, health: int, power_level: int):
        self.name = name
        self._health = health
        self._power_level = power_level
        # TODO: Add the private attributes

    def get_health(self) -> int:
        return self._health

    def get_power_level(self) -> int:
        return self._power_level

    def set_health(self, health) -> None:
        if health > 100:
            print("You can't set the health to more than 100")
            return
        elif health < 0:
            print("You can't set the health to less than 0")
            return
        self._health = health
    
    def set_power_level(self, power_level) -> None:
        if power_level > 10:
            print("You can't set the power level to more than 10")
            return
        elif power_level < 1:
            print("You can't set the power level to less than 1")
            return
        self._power_level = power_level



super_hero = SuperHero("Batman", 80, 9)

print(super_hero.get_health()) # this should print 80
super_hero.set_health(110) # this should print You can't set the health to more than 100
super_hero.set_health(-10) # this should print You can't set the health to less than 100
super_hero.set_health(70)

print(super_hero.get_power_level()) # this should print 9
super_hero.set_power_level(11) # this should print You can't set the power level to more than 10
super_hero.set_power_level(0) # this should print You can't set the power level to less than 1
super_hero.set_power_level(7)



# TODO: print the hero's attributes
print(f"{super_hero.name} has {super_hero.get_health()} health and {super_hero.get_power_level()} power level")

