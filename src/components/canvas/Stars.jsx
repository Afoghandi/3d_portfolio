import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
	const ref = useRef();
	const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

	//useFrame to animate teh stars and move frame by frame
	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 8;
		ref.current.rotation.y -= delta / 25;
	});
	return (
		//Create stars and add rotation
		<group rotation={[0, 1, Math.PI / 2]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color='#f272c8'
					size={0.003}
					sizeAttenuation={true}
					depthWrite={true}
				/>
			</Points>
		</group>
	);
};
const StarsCanvas = () => {
	return (
		//Use canvas when we want to display 3d components
		<div className='w-full h-auto absolute inset-0 z-[-1]'>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
