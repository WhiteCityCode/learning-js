type PetKind = "cat" | "dog" | "guinea_pig" | "chicken" | "duck";

export const FoodMap: Record<PetKind, string> = {
  cat: "mice",
  dog: "cats",
  guinea_pig: "fruit",
  chicken: "worms",
  duck: "bread",
};

export class Pet {
  private _isFed = false;

  constructor(private readonly type: PetKind) {}

  public getType(): typeof this.type {
    return this.type;
  }

  public feed(food: string): this {
    if (FoodMap[this.type] === food) {
      this._isFed = true;
    }

    return this;
  }

  public isFed(): boolean {
    return this._isFed;
  }
}
