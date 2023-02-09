import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, Column } from "typeorm";

import { clienteEntity } from './cliente.entity';


@Entity('cliente',{schema:'clienteTienda'})
export class clienteEntity{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('Nombre')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date;
    
    @ManyToOne (() => clienteEntity, (cliente) => cliente.Tienda)
    category: clienteEntity;
    
    @Column('varchar',{
        name:'tienda',
        comment: 'Nombre de la tienda',
    })
    hospital:string;

    @Column('varchar',{
        name:'ubicación',
        comment:'Ubicación de la tienda',
    })
    ubication:string;
 
    
    @Column('varchar',{
        name:'numero_telefono',
        comment:'Numero de telefono'
    })
    
    numberOfPhonet:string;

}
