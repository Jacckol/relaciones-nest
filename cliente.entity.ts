import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, Column } from "typeorm";
import { TiendaEntity } from './Tienda.entity';

@Entity('Tienda',{schema:'doctorHospital'})

export class Tienda{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('Nombre')
    id:string;
    @CreateDateColumn({
        //objeto
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;//atributo

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

    deleteAt:Date; //el nombre del atributo
    //Relationships
    @ManyToOne (() => TiendaEntity, (Tienda) => Tienda.cliente)
    category: TiendaEntity;


    @Column('varchar',{
        name:'name',
        unique:true,
        comment: 'Nombre del cliente',
    })
    NameOfDoctor:string;

    @Column('varchar',{
        name:'direccion',
        unique:true,
        comment:'Direccion',
    })
    direction:string;
    
   