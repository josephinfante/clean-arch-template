const createError = (name: string) => class extends Error {
    constructor(message: string) {
        super(message);
        this.name = name;
    }
};

export const UserError = createError("UserError");