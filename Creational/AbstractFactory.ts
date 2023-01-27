interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
}

class VictorianFactory implements FurnitureFactory {
    public createChair(): Chair {
    return new VictorianChair();
    }
    public createSofa(): Sofa {
    return new VictorianSofa();
    }
}

class ModernFactory implements FurnitureFactory {
    public createChair(): Chair {
    return new ModernChair();
    }
    public createSofa(): Sofa {
    return new ModernSofa();
    }
}

interface Chair {
    ChairDesign(): string;
}

class VictorianChair implements Chair {
    public ChairDesign(): string {
        return 'victorian chair';
    }
}

class ModernChair implements Chair {
    public ChairDesign(): string {
        return 'modern chair';
    }
}

interface Sofa {
    SofaDesign(): string;
}

class VictorianSofa implements Sofa {
    public SofaDesign(): string {
        return 'victorian sofa';
    }
}

class ModernSofa implements Sofa {
    public SofaDesign(): string {
        return 'modern sofa';
    }
}

function clientCode(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();

    console.log(chair.ChairDesign());
    console.log(sofa.SofaDesign());
}

clientCode(new VictorianFactory());