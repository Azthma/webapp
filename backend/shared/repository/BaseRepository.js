class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    create(item) {
        return this.model.create(item);
    }

    bulkCreate(items) {
        return this.model.bulkCreate(items);
    }

    findById(id = 0, fields) {
        const options = {
            where: { id },
        };
        if (!!fields && fields) {
            options.attributes = fields;
        }
        return this.model.findOne(options);
    }

    findAll(fields) {
        const options = {};
        if (!!fields && fields) {
            options.attributes = fields;
        }
        return this.model.findAll(options);
    }

    findAllById(match_id, fields) {
        const options = {
            where: { match_id },
        };
        if (!!fields && fields) {
            options.attributes = fields;
        }
        return this.model.findAll(options);
    }

    updateById(id = 0, item) {
        let options = {
            where: { id },
        };
        return this.model.update(item, options);
    }

    update(item, where) {
        let options = {
            where,
        };
        return this.model.update(item, options);
    }

    deleteById(id = 0) {
        let options = {
            where: { id },
        };
        return this.model.destroy(options);
    }

    delete(where) {
        let options = { where };
        return this.model.destroy(options);
    }

    findOrCreate(where, defaults) {
        const options = {
            where,
            defaults,
        };
        return this.model.findOrCreate(options);
    }

    getAll(fields, { page, pageSize, nolimit, searchBy, searchText }, include) {
        const options = {
            order: [['id', 'DESC']],
        };
        if (!!fields && fields) {
            options.attributes = fields;
        }
        pageSize = !!pageSize ? pageSize : 15;
        page = !!page ? page : 1;

        if (!!nolimit === false) {
            const offset = (page - 1) * parseInt(pageSize);
            const limit = parseInt(pageSize);
            options.offset = offset;
            options.limit = limit;
        }

        if (!!include && Array.isArray(include)) {
            options.include = include;
        }
        return this.model.findAndCountAll(options);
    }

    bulkDelete(ids = []) {
        let options = {
            where: { id: ids },
        };
        return this.model.destroy(options);
     }
}

module.exports = BaseRepository;
