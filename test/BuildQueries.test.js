import {BuildQueries} from "../src/BuildQueries";

describe('BuildQueries', () => {
    it('should return empty array when given empty array', () => {
        let queries = BuildQueries([]);

        expect(queries.length).toBe(0);
    });

    it('should return 2 strings when given one rule', () => {
        let queries = BuildQueries([{name: 'name1', owner: 'owner1', date: new Date()}]);

        expect(queries.length).toBe(2);
    });

    it('should contain proper strings', () => {
        let queries = BuildQueries([{name: 'name1', owner: 'owner1', date: new Date()}]);

        expect(queries.includes('name1')).toBeTruthy();
        expect(queries.includes('owner1')).toBeTruthy();
    });

    it('should return proper array', () => {
        let rules = [
            {
                name: 'name1',
                owner: 'owner1',
                date: new Date()
            },
            {
                name: 'name2',
                owner: 'owner2',
                date: new Date()
            },
            {
                name: 'name3',
                owner: 'owner4',
                date: new Date()
            },
            {
                name: 'name4',
                owner: 'owner4',
                date: new Date()
            },
            {
                name: 'name5',
                owner: 'owner5',
                date: new Date()
            }
        ];

        let queries = BuildQueries(rules);

        expect(queries.length).toBe(rules.length * 2);
        for (const rule of rules) {
            expect(queries.includes(rule.name));
            expect(queries.includes(rule.owner));
        }
    });
});