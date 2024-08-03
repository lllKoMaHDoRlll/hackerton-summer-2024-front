import { IonCard, IonCardTitle, IonAvatar, IonCardContent } from "@ionic/react"


import styled from "styled-components";

const ProfileCardTitle = styled(IonCardTitle)`
    display: flex;
`

export default function ProfileCard(props: any) {
    return (
        <IonCard className="ion-padding-start ion-padding-top">
            <ProfileCardTitle className="ion-align-items-center">
                <IonAvatar className="ion-margin-end">
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                </IonAvatar>
                {props.user.firstName} {props.user.LastName}
            </ProfileCardTitle>
            <IonCardContent>email: {props.user.email}</IonCardContent>
        </IonCard>
    )
}