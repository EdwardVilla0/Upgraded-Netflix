import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase';
import './PlansScreen.styles.css';

function PlansScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('products')
            .where("active", "==", true)
            .get()
            .then((querySnapshot) => {
                const products = {};
                querySnapshot.forEach(async productDoc => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection('prices').get();
                    priceSnap.docs.forEach((price) => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data()
                        }
                    })
                });
                setProducts(products);
            })
    }, []);

    const loadCheckout = async (priceId) => {
        const docRef = await db
            .collection('customers')
            .doc(user.uid)
            .collection("")
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin
            });

        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();

            if (error) {
                alert('an error has occured: ${error.message}')
            }
        })
    };

    return (
        <div className="plansScreen">
            {Object.entries(products).map(([productId, productData]) => {
                return (
                    <div className="plansScreen__plan">
                        <div className="plansScreen__info">
                            <h5>{productData.name}</h5>
                            <h5>{productData.description}</h5>
                        </div>
                        <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
                    </div>
                );
            })}
        </div>
    )
}

export default PlansScreen
