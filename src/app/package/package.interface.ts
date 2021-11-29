export interface IPackage{
     package_id?: number;
     package_name: string;
     package_description: string;
     package_x_units: number;
     package_base_price: number;
     package_status: boolean;
     product_id?: number; // aca el dto de producto
}